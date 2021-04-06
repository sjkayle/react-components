import React, { useState, ReactNode, useCallback } from "react";

import { Checkbox } from "../Checkbox";
import { Textbox } from "../Textbox";
import { Textarea } from "../Textarea";
import { Dropdown, getValueOfMultipleSelect } from "../Dropdown";
import { Datepicker } from "../Datepicker";
import { Stepper } from "../Stepper";
import { RadioButton, RadioGroup } from "../RadioButton";
import { isEmpty } from "@sebgroup/frontend-tools/isEmpty";
import { isValidDate } from "@sebgroup/frontend-tools/isValidDate";

type DynamicFormInternalStateValue = string | string[] | DynamicFormOption | DynamicFormOption[] | Date | boolean | number;
export interface DynamicFormItem {
    key: string;
    controlType: DynamicFormType;
    value?: DynamicFormInternalStateValue;
    order?: number;
    label?: string;
    description?: string;
    multi?: boolean;
    min?: any;
    max?: any;
    placeholder?: string;
    options?: Array<DynamicFormOption>;
    valueType?: "string" | "number";
    rulerKey?: string;
    condition?: DynamicFormInternalStateValue;
    additionalProps?: {
        [k: string]: any;
    };
}

export type DynamicFormType = "Hidden" | "Text" | "Textarea" | "Checkbox" | "Dropdown" | "Datepicker" | "Radio" | "Option" | "LabelOnly" | "Stepper";

export interface DynamicFormSection {
    key: string;
    title?: string;
    order?: number;
    items?: Array<DynamicFormItem>;
    wrappingElement?: "div" | "section" | "none";
    additionalProps?: {
        [k: string]: any;
    };
}

export interface DynamicFormOption<T = any> {
    key: string;
    value?: T;
    label?: string;
    description?: string;
    additionalProps?: {
        [k: string]: any;
    };
}

type InputChange = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | Date | number;
interface DynamicFormInternalStateSection {
    [k: string]: DynamicFormInternalStateValue;
}
interface DynamicFormInternalState {
    [k: string]: DynamicFormInternalStateSection;
}
type OnChangeFormSection = (section: DynamicFormSection) => OnChangeFormItem;
type OnChangeFormItem = (item: DynamicFormItem) => OnChangeInput;
type OnChangeInput = (e: InputChange) => void;
type ShouldRenderFormItem = (sectionKey: string, itemKey: string) => boolean;

export function useDynamicForm(sections: DynamicFormSection[]): [() => JSX.Element, any, React.Dispatch<React.SetStateAction<DynamicFormInternalState>>] {
    const initialState: DynamicFormInternalState = {};
    sections?.map((section) => {
        initialState[section?.key] = {};
        section.items?.map((item) => {
            const { key, value, multi, controlType }: DynamicFormItem = item;
            let initialValue: any;

            switch (controlType) {
                case "Dropdown": {
                    if (multi) {
                        if (value !== null && value !== undefined && Array.isArray(value) && (value as any[]).every((x) => typeof x === "string")) {
                            initialValue = value as string[];
                        } else {
                            initialValue = [];
                        }
                    } else {
                        initialValue = typeof value === "string" ? value : "";
                    }
                    break;
                }
                case "Checkbox": {
                    initialValue = !!value;
                    break;
                }
                case "Datepicker": {
                    if (typeof value == "string" || typeof value == "number") {
                        initialValue = isValidDate(new Date(value)) ? new Date(value) : null;
                    } else if (value instanceof Date) {
                        initialValue = value as Date;
                    } else {
                        initialValue = null;
                    }
                    break;
                }
                case "Stepper": {
                    if (typeof value !== "number" && Number.isInteger(Number(value))) {
                        initialValue = Number(value);
                    } else {
                        initialValue = value;
                    }
                    break;
                }
                case "Option": {
                    initialValue = Array.isArray(value) ? value : [];
                    break;
                }
                case "Radio": {
                    if (typeof value === "string" || typeof value === "number") {
                        initialValue = value;
                    } else {
                        initialValue = "";
                    }
                    break;
                }
                default:
                    initialValue = value || "";
                    break;
            }

            (initialState[section?.key] as DynamicFormInternalStateSection)[key] = initialValue;
        });
    });
    const [state, setState] = useState<DynamicFormInternalState>(initialState);

    /**
     * SHOULD RENDER CONTROL:
     * Determines if the form control should be rendered or not.
     * @param sectionKey section key
     * @param itemKey section key
     */
    const shouldRender: ShouldRenderFormItem = useCallback<ShouldRenderFormItem>(
        (sectionKey: string, itemKey: string): boolean => {
            const { rulerKey, condition, controlType }: Partial<DynamicFormItem> =
                sections?.find((item: DynamicFormSection) => item.key === sectionKey)?.items?.find((item: DynamicFormItem) => item.key === itemKey) || {};
            if (controlType === "Hidden") {
                // Marked as hidden, don't render
                return false;
            }
            if (typeof rulerKey === "string" && !!rulerKey.length) {
                let rulerState: DynamicFormInternalStateValue;

                if (!isEmpty(state) && !isEmpty(state[sectionKey])) {
                    rulerState = (state[sectionKey] as DynamicFormInternalStateSection)[rulerKey];
                }

                if (rulerState === undefined || condition === undefined) {
                    return false;
                }

                if (typeof rulerState === "string" && rulerState === condition) {
                    return shouldRender(sectionKey, rulerKey);
                } else if (rulerState && condition && typeof condition === "object" && Array.isArray(condition)) {
                    for (const conditionItem of condition as any[]) {
                        if (conditionItem) {
                            if (typeof rulerState === "object" && Array.isArray(rulerState)) {
                                for (const rulerValueItem of rulerState) {
                                    if (rulerValueItem && typeof rulerValueItem === "object" && rulerValueItem.value === conditionItem.value && rulerValueItem.key === conditionItem.key) {
                                        return shouldRender(sectionKey, rulerKey);
                                    } else if (rulerValueItem && typeof rulerValueItem === "string" && rulerValueItem === conditionItem) {
                                        return shouldRender(sectionKey, rulerKey);
                                    }
                                }
                            } else if (typeof rulerState === "object" && !Array.isArray(rulerState)) {
                                if (rulerState && (rulerState as DynamicFormOption)?.value === conditionItem.value && (rulerState as DynamicFormOption)?.key === conditionItem.key) {
                                    return shouldRender(sectionKey, rulerKey);
                                }
                            }
                        }
                    }
                } else if (rulerState && typeof rulerState === "object" && !Array.isArray(rulerState) && (rulerState as DynamicFormOption)?.value === (condition as DynamicFormOption)?.value) {
                    return shouldRender(sectionKey, rulerKey);
                } else if (rulerState && typeof rulerState === "boolean") {
                    return shouldRender(sectionKey, rulerKey);
                }
                return false;
            }
            return true;
        },
        [state, sections]
    );

    const onChange: OnChangeFormSection = useCallback<OnChangeFormSection>(
        (section: DynamicFormSection) => (item: DynamicFormItem) => (e: InputChange) => {
            const sectionState: DynamicFormInternalStateSection = state && state.hasOwnProperty(section.key) ? state[section.key] : {};
            const controlType: DynamicFormType = item?.controlType || "Text";
            let newValue: DynamicFormInternalStateValue = null;

            switch (controlType) {
                case "Text":
                case "Textarea":
                    newValue = (e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>).target.value;
                    newValue = item.valueType === "number" ? Number(newValue) : newValue;
                    break;
                case "Option": {
                    let newOptions: DynamicFormOption[] = [...(((sectionState as DynamicFormInternalStateSection)[item.key] as DynamicFormOption[]) || [])];
                    const targetId: string = (e as React.ChangeEvent<HTMLInputElement>).target.id;
                    if (newOptions.find((o) => o.key === targetId)) {
                        newOptions = [...newOptions.filter((o) => o.key !== targetId)];
                    } else {
                        const targetOption: DynamicFormOption | undefined = item.options?.find((o) => o.key === targetId);
                        if (targetOption) {
                            newOptions.push(targetOption);
                        }
                    }
                    newValue = newOptions;
                    break;
                }
                case "Radio": {
                    const targetValue: string = (e as React.ChangeEvent<HTMLInputElement>).target.value;
                    const targetOption: DynamicFormOption | undefined = item.options?.find((o) => o.value === targetValue);
                    if (targetOption) {
                        newValue = targetOption.value;
                    }
                    break;
                }
                case "Checkbox": {
                    const targetValue: boolean = (e as React.ChangeEvent<HTMLInputElement>).target.checked;
                    newValue = targetValue;
                    break;
                }
                case "Dropdown": {
                    const target = (e as React.ChangeEvent<HTMLSelectElement>).target;
                    newValue = target.multiple ? getValueOfMultipleSelect(target) : target.value;
                    break;
                }

                default: {
                    newValue = e as any;
                    break;
                }
            }

            setState({
                ...state,
                [section.key]: {
                    ...sectionState,
                    [item.key]: newValue,
                },
            });
        },
        [state]
    );
    const renderForm = useCallback(() => <DynamicFormComponent sections={sections} state={state} onChange={onChange} shouldRender={shouldRender} />, [sections, state, onChange, shouldRender]);

    return [renderForm, state, setState];
}

const DynamicFormComponent: React.FC<{
    sections: DynamicFormSection[];
    state: DynamicFormInternalState;
    onChange: OnChangeFormSection;
    shouldRender: ShouldRenderFormItem;
}> = (props) => {
    return (
        <>
            {props.sections?.map((section, i) => (
                <React.Fragment key={i}>
                    {!!section?.title ? <h4>{section.title}</h4> : null}
                    <DynamicFormSectionComponent
                        key={i}
                        section={section}
                        shouldRender={props.shouldRender}
                        onChange={props.onChange(section)}
                        state={props.state && props.state.hasOwnProperty(section.key) ? props.state[section.key] : null}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

const DynamicFormSectionComponent: React.FC<{
    section: DynamicFormSection;
    state: DynamicFormInternalStateSection;
    onChange: OnChangeFormItem;
    shouldRender: ShouldRenderFormItem;
}> = (props) => {
    const { wrappingElement = "none", additionalProps = {} } = props.section;

    const getSections = (): JSX.Element[] =>
        props.section?.items?.map((item, i) => {
            if (props.shouldRender(props.section.key, item.key)) {
                return <DynamicFormItemComponent key={i} item={item} onChange={props.onChange(item)} state={props.state ? (props.state as DynamicFormInternalStateSection)[item.key] : null} />;
            }
        });

    switch (wrappingElement) {
        case "div":
            return <div {...additionalProps}>{getSections()}</div>;
        case "section":
            return <section {...additionalProps}>{getSections()}</section>;

        default:
            return <>{getSections()}</>;
    }
};

const DynamicFormItemComponent: React.FC<{
    item: DynamicFormItem;
    state: DynamicFormInternalStateValue;
    onChange: OnChangeInput;
}> = (props) => {
    const controlType: DynamicFormType = props.item?.controlType || "Text";
    const commonProps: {
        name: string;
        label: string;
        value: any;
        minLength: number;
        maxLength: number;
        placeholder: string;
        onChange: (...args: any[]) => void;
    } = {
        name: props.item?.key || "",
        label: props.item?.label || "",
        value: props.state as any,
        minLength: props.item?.min,
        maxLength: props.item?.max,
        placeholder: props.item?.placeholder,
        onChange: props.onChange,
    };

    const { additionalProps = {} }: DynamicFormItem = props.item;

    let formItem: ReactNode;

    const descriptionItem: ReactNode = props.item?.description ? <p className="rc dynamic-form text-muted m-0">{props.item?.description}</p> : <></>;

    switch (controlType) {
        case "Textarea": {
            formItem = (
                <>
                    <Textarea {...commonProps} {...additionalProps} />
                    {descriptionItem}
                </>
            );
            break;
        }
        case "Text": {
            formItem = (
                <>
                    <Textbox {...commonProps} type={props.item.valueType || "text"} {...additionalProps} />
                    {descriptionItem}
                </>
            );
            break;
        }

        case "Radio": {
            const { name, onChange, label, value } = commonProps;

            formItem = (
                <>
                    {label && <label>{label}</label>}
                    <RadioGroup {...{ name, onChange, value }} {...additionalProps}>
                        {props.item?.options?.map((option: DynamicFormOption, i) => (
                            <RadioButton key={i} value={option?.value} {...(option?.additionalProps || {})}>
                                {option?.label}
                                {option?.description && <p className="text-muted m-0">{option?.description}</p>}
                            </RadioButton>
                        ))}
                    </RadioGroup>
                    {descriptionItem}
                </>
            );
            break;
        }

        case "Dropdown": {
            const { name, onChange, placeholder, label, value } = commonProps;

            formItem = (
                <>
                    {label && <label>{label}</label>}
                    <Dropdown {...{ name, onChange, placeholder, value }} multiple={props.item?.multi} {...additionalProps}>
                        {props.item?.options?.map((option: DynamicFormOption, i) => (
                            <option key={i} value={option?.value} {...(option?.additionalProps || {})}>
                                {option?.label}
                            </option>
                        ))}
                    </Dropdown>
                    {descriptionItem}
                </>
            );
            break;
        }

        case "Checkbox": {
            const { name, onChange, value } = commonProps;
            formItem = (
                <Checkbox {...{ name, onChange }} checked={!!value} {...additionalProps}>
                    {commonProps.label}
                    {descriptionItem}
                </Checkbox>
            );
            break;
        }

        case "Datepicker": {
            const { onChange, name, label, value } = commonProps;
            formItem = (
                <>
                    {label && <label>{label}</label>}
                    <Datepicker {...{ value, onChange, name }} min={props.item?.min} max={props.item?.max} {...additionalProps} />
                    {descriptionItem}
                </>
            );
            break;
        }

        case "Stepper": {
            const { label, value } = commonProps;

            formItem = (
                <>
                    <Stepper
                        {...{ value, label }}
                        min={props.item?.min}
                        max={props.item?.max}
                        onIncrease={() => props.onChange(value + 1)}
                        onDecrease={() => props.onChange(value - 1)}
                        {...additionalProps}
                    />
                    {descriptionItem}
                </>
            );
            break;
        }

        case "Option": {
            const { label, value } = commonProps;

            formItem = (
                <>
                    {label && <label>{label}</label>}
                    <div className="d-flex flex-wrap" role="group">
                        {props.item?.options?.map((option: DynamicFormOption, i) => {
                            const active: boolean = !!(value as DynamicFormOption[])?.find((o) => option.key === o.key)?.value;
                            return (
                                <button
                                    key={i}
                                    onClick={props.onChange}
                                    type="button"
                                    id={option.key}
                                    name={props.item?.key}
                                    className={`btn btn-sm mr-1 mb-1 btn-outline-primary${active ? " active" : ""}`}
                                    {...(option?.additionalProps || {})}
                                >
                                    {option?.label}
                                </button>
                            );
                        })}
                    </div>
                    {descriptionItem}
                </>
            );
            break;
        }

        case "LabelOnly": {
            const { label } = commonProps;
            formItem = (
                <>
                    {label && <label>{label}</label>}
                    {descriptionItem}
                </>
            );
            break;
        }

        default:
            formItem = (
                <>
                    <label>{props.item?.label}</label>
                    {` ERORR: controlType: ${controlType} not recognised.`}
                </>
            );
            break;
    }

    return <>{formItem}</>;
};
