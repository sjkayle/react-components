import React from "react";
import { TableContext } from "../TableContextProvider";
import { TableRowProps } from "./TableRow";

export type TableBodyProps = JSX.IntrinsicElements["tbody"];

const TableBody: React.FC<TableBodyProps> = ({ ...props }: TableBodyProps) => {
    let parentKey: string;

    /**
     * clone table row by appending parent key to sub row if necessary
     * @param Child react element
     * @param index index number
     */
    const cloneTableRow = React.useCallback((Child: React.ReactElement<any>, index: number) => {
        const isTableRow: boolean = React.isValidElement<React.FC<TableRowProps>>(Child) && (Child?.type as any)?.displayName === "TableRow";
        if (isTableRow && !Child.props.isSubRow) {
            parentKey = Child.props.uniqueKey;
        }
        return isTableRow ? React.cloneElement<any>(Child, { index, parentKey }) : Child;
    }, []);

    return (
        <tbody {...props}>
            {React.Children.map(props.children, (Child: React.ReactElement<any>, i: number) => {
                if (Child?.type === React.Fragment) {
                    return React.cloneElement<any>(Child, {
                        children: React.Children.map(Child.props.children, (FragmentChild: React.ReactElement<any>, fragmentIndex: number) => cloneTableRow(FragmentChild, fragmentIndex)),
                    });
                } else {
                    return cloneTableRow(Child, i);
                }
            })}
        </tbody>
    );
};

TableBody.displayName = "TableBody";

export default TableBody;
