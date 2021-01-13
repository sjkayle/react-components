import { Mapper, YoutubeAPI, VimeoAPI } from "./types-definition";

export const youtubeKeysMapper: Partial<Mapper<YoutubeAPI>> = {
    autoplay: { keys: ["autoplay"] },
    allowFullScreen: { keys: ["fs"] },
    showControls: { keys: ["controls"] },
    playsinline: { keys: ["playsinline"] },
    showCaptions: { keys: ["cc_load_policy"] },
    color: { keys: ["color"] },
    disableKeyboardInteraction: { keys: ["disablekb"] },
    enableAPIControl: { keys: ["enablejsapi"] },
    endTime: { keys: ["end"] },
    loop: { keys: ["loop"] },
    language: { keys: ["cc_lang_pref", "hl"] },
    showVideoAnnotations: { keys: ["iv_load_policy"], values: { oldValue: false, newValue: 3 } },
    youtubeListType: { keys: ["listType"] },
    youtubeList: { keys: ["list"] },
    hideBranding: { keys: ["modestbranding"] },
    origin: { keys: ["origin"] },
    playlist: { keys: ["playlist"] },
    showRelatedVideosFromDifferentChannel: { keys: ["rel"] },
    startTime: { keys: ["start"] },
    widgetReferrer: { keys: ["widget_referrer"] },
};

export const vimeoKeysMapper: Partial<Mapper<VimeoAPI>> = {
    autoplay: { keys: ["autoplay"] },
    autopause: { keys: ["autopause"] },
    setBackgroundAsTransparent: { keys: ["background"] },
    showOwnerName: { keys: ["byline"] },
    showControls: { keys: ["controls"] },
    allowSessionTracking: { keys: ["dnt"] },
    vimeoFunMode: { keys: ["fun"] },
    color: { keys: ["color"] },
    loop: { keys: ["loop"] },
    muted: { keys: ["muted"] },
    playsinline: { keys: ["playsinline"] },
    showOwnerPortrait: { keys: ["portrait"] },
    quality: { keys: ["quality"] },
    showPlaybackSpeedSetting: { keys: ["speed"] },
    language: { keys: ["texttrack"] },
    showTitle: { keys: ["title"] },
    startTime: { keys: ["t"], conjunctionSymbol: "#" },
};