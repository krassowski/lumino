// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import { ArrayExt } from '@lumino/algorithm';

/**
 * The names of the supported HTML5 DOM element attributes.
 *
 * This list is not all-encompassing, rather it attempts to define the
 * attribute names which are relevant for use in a virtual DOM context.
 * If a standardized or widely supported name is missing, please open
 * an issue to have it added.
 *
 * The attribute names were collected from the following sources:
 *   - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 *   - https://www.w3.org/TR/html5/index.html#attributes-1
 *   - https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 */
export type ElementAttrNames =
  | 'abbr'
  | 'accept'
  | 'accept-charset'
  | 'accesskey'
  | 'action'
  | 'allowfullscreen'
  | 'alt'
  | 'autocomplete'
  | 'autofocus'
  | 'autoplay'
  | 'autosave'
  | 'checked'
  | 'cite'
  | 'cols'
  | 'colspan'
  | 'contenteditable'
  | 'controls'
  | 'coords'
  | 'crossorigin'
  | 'data'
  | 'datetime'
  | 'default'
  | 'dir'
  | 'dirname'
  | 'disabled'
  | 'download'
  | 'draggable'
  | 'dropzone'
  | 'enctype'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'headers'
  | 'height'
  | 'hidden'
  | 'high'
  | 'href'
  | 'hreflang'
  | 'id'
  | 'inputmode'
  | 'integrity'
  | 'ismap'
  | 'kind'
  | 'label'
  | 'lang'
  | 'list'
  | 'loop'
  | 'low'
  | 'max'
  | 'maxlength'
  | 'media'
  | 'mediagroup'
  | 'method'
  | 'min'
  | 'minlength'
  | 'multiple'
  | 'muted'
  | 'name'
  | 'novalidate'
  | 'optimum'
  | 'pattern'
  | 'placeholder'
  | 'poster'
  | 'preload'
  | 'readonly'
  | 'rel'
  | 'required'
  | 'reversed'
  | 'rows'
  | 'rowspan'
  | 'sandbox'
  | 'scope'
  | 'selected'
  | 'shape'
  | 'size'
  | 'sizes'
  | 'span'
  | 'spellcheck'
  | 'src'
  | 'srcdoc'
  | 'srclang'
  | 'srcset'
  | 'start'
  | 'step'
  | 'tabindex'
  | 'target'
  | 'title'
  | 'type'
  | 'typemustmatch'
  | 'usemap'
  | 'value'
  | 'width'
  | 'wrap';

/**
 * The names of ARIA attributes for HTML elements.
 *
 * The attribute names are collected from
 * https://www.w3.org/TR/html5/infrastructure.html#element-attrdef-aria-role
 */
export type ARIAAttrNames =
  | 'aria-activedescendant'
  | 'aria-atomic'
  | 'aria-autocomplete'
  | 'aria-busy'
  | 'aria-checked'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-current'
  | 'aria-describedby'
  | 'aria-details'
  | 'aria-dialog'
  | 'aria-disabled'
  | 'aria-dropeffect'
  | 'aria-errormessage'
  | 'aria-expanded'
  | 'aria-flowto'
  | 'aria-grabbed'
  | 'aria-haspopup'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-keyshortcuts'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-level'
  | 'aria-live'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-owns'
  | 'aria-placeholder'
  | 'aria-posinset'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-relevant'
  | 'aria-required'
  | 'aria-roledescription'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowspan'
  | 'aria-selected'
  | 'aria-setsize'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext'
  | 'role';

/**
 * The names of the supported HTML5 CSS property names.
 *
 * If a standardized or widely supported name is missing, please open
 * an issue to have it added.
 *
 * The property names were collected from the following sources:
 *   - TypeScript's `lib.dom.d.ts` file
 */
export type CSSPropertyNames =
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'alignmentBaseline'
  | 'animation'
  | 'animationDelay'
  | 'animationDirection'
  | 'animationDuration'
  | 'animationFillMode'
  | 'animationIterationCount'
  | 'animationName'
  | 'animationPlayState'
  | 'animationTimingFunction'
  | 'backfaceVisibility'
  | 'background'
  | 'backgroundAttachment'
  | 'backgroundClip'
  | 'backgroundColor'
  | 'backgroundImage'
  | 'backgroundOrigin'
  | 'backgroundPosition'
  | 'backgroundPositionX'
  | 'backgroundPositionY'
  | 'backgroundRepeat'
  | 'backgroundSize'
  | 'baselineShift'
  | 'border'
  | 'borderBottom'
  | 'borderBottomColor'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomStyle'
  | 'borderBottomWidth'
  | 'borderCollapse'
  | 'borderColor'
  | 'borderImage'
  | 'borderImageOutset'
  | 'borderImageRepeat'
  | 'borderImageSlice'
  | 'borderImageSource'
  | 'borderImageWidth'
  | 'borderLeft'
  | 'borderLeftColor'
  | 'borderLeftStyle'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRight'
  | 'borderRightColor'
  | 'borderRightStyle'
  | 'borderRightWidth'
  | 'borderSpacing'
  | 'borderStyle'
  | 'borderTop'
  | 'borderTopColor'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderTopStyle'
  | 'borderTopWidth'
  | 'borderWidth'
  | 'bottom'
  | 'boxShadow'
  | 'boxSizing'
  | 'breakAfter'
  | 'breakBefore'
  | 'breakInside'
  | 'captionSide'
  | 'clear'
  | 'clip'
  | 'clipPath'
  | 'clipRule'
  | 'color'
  | 'colorInterpolationFilters'
  | 'columnCount'
  | 'columnFill'
  | 'columnGap'
  | 'columnRule'
  | 'columnRuleColor'
  | 'columnRuleStyle'
  | 'columnRuleWidth'
  | 'columnSpan'
  | 'columnWidth'
  | 'columns'
  | 'content'
  | 'counterIncrement'
  | 'counterReset'
  | 'cssFloat'
  | 'cssText'
  | 'cursor'
  | 'direction'
  | 'display'
  | 'dominantBaseline'
  | 'emptyCells'
  | 'enableBackground'
  | 'fill'
  | 'fillOpacity'
  | 'fillRule'
  | 'filter'
  | 'flex'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexFlow'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'floodColor'
  | 'floodOpacity'
  | 'font'
  | 'fontFamily'
  | 'fontFeatureSettings'
  | 'fontSize'
  | 'fontSizeAdjust'
  | 'fontStretch'
  | 'fontStyle'
  | 'fontVariant'
  | 'fontWeight'
  | 'glyphOrientationHorizontal'
  | 'glyphOrientationVertical'
  | 'height'
  | 'imeMode'
  | 'justifyContent'
  | 'kerning'
  | 'left'
  | 'letterSpacing'
  | 'lightingColor'
  | 'lineHeight'
  | 'listStyle'
  | 'listStyleImage'
  | 'listStylePosition'
  | 'listStyleType'
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marker'
  | 'markerEnd'
  | 'markerMid'
  | 'markerStart'
  | 'mask'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'msContentZoomChaining'
  | 'msContentZoomLimit'
  | 'msContentZoomLimitMax'
  | 'msContentZoomLimitMin'
  | 'msContentZoomSnap'
  | 'msContentZoomSnapPoints'
  | 'msContentZoomSnapType'
  | 'msContentZooming'
  | 'msFlowFrom'
  | 'msFlowInto'
  | 'msFontFeatureSettings'
  | 'msGridColumn'
  | 'msGridColumnAlign'
  | 'msGridColumnSpan'
  | 'msGridColumns'
  | 'msGridRow'
  | 'msGridRowAlign'
  | 'msGridRowSpan'
  | 'msGridRows'
  | 'msHighContrastAdjust'
  | 'msHyphenateLimitChars'
  | 'msHyphenateLimitLines'
  | 'msHyphenateLimitZone'
  | 'msHyphens'
  | 'msImeAlign'
  | 'msOverflowStyle'
  | 'msScrollChaining'
  | 'msScrollLimit'
  | 'msScrollLimitXMax'
  | 'msScrollLimitXMin'
  | 'msScrollLimitYMax'
  | 'msScrollLimitYMin'
  | 'msScrollRails'
  | 'msScrollSnapPointsX'
  | 'msScrollSnapPointsY'
  | 'msScrollSnapType'
  | 'msScrollSnapX'
  | 'msScrollSnapY'
  | 'msScrollTranslation'
  | 'msTextCombineHorizontal'
  | 'msTextSizeAdjust'
  | 'msTouchAction'
  | 'msTouchSelect'
  | 'msUserSelect'
  | 'msWrapFlow'
  | 'msWrapMargin'
  | 'msWrapThrough'
  | 'opacity'
  | 'order'
  | 'orphans'
  | 'outline'
  | 'outlineColor'
  | 'outlineStyle'
  | 'outlineWidth'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'pageBreakAfter'
  | 'pageBreakBefore'
  | 'pageBreakInside'
  | 'perspective'
  | 'perspectiveOrigin'
  | 'pointerEvents'
  | 'position'
  | 'quotes'
  | 'resize'
  | 'right'
  | 'rubyAlign'
  | 'rubyOverhang'
  | 'rubyPosition'
  | 'stopColor'
  | 'stopOpacity'
  | 'stroke'
  | 'strokeDasharray'
  | 'strokeDashoffset'
  | 'strokeLinecap'
  | 'strokeLinejoin'
  | 'strokeMiterlimit'
  | 'strokeOpacity'
  | 'strokeWidth'
  | 'tableLayout'
  | 'textAlign'
  | 'textAlignLast'
  | 'textAnchor'
  | 'textDecoration'
  | 'textIndent'
  | 'textJustify'
  | 'textKashida'
  | 'textKashidaSpace'
  | 'textOverflow'
  | 'textShadow'
  | 'textTransform'
  | 'textUnderlinePosition'
  | 'top'
  | 'touchAction'
  | 'transform'
  | 'transformOrigin'
  | 'transformStyle'
  | 'transition'
  | 'transitionDelay'
  | 'transitionDuration'
  | 'transitionProperty'
  | 'transitionTimingFunction'
  | 'unicodeBidi'
  | 'verticalAlign'
  | 'visibility'
  | 'webkitAlignContent'
  | 'webkitAlignItems'
  | 'webkitAlignSelf'
  | 'webkitAnimation'
  | 'webkitAnimationDelay'
  | 'webkitAnimationDirection'
  | 'webkitAnimationDuration'
  | 'webkitAnimationFillMode'
  | 'webkitAnimationIterationCount'
  | 'webkitAnimationName'
  | 'webkitAnimationPlayState'
  | 'webkitAnimationTimingFunction'
  | 'webkitAppearance'
  | 'webkitBackfaceVisibility'
  | 'webkitBackgroundClip'
  | 'webkitBackgroundOrigin'
  | 'webkitBackgroundSize'
  | 'webkitBorderBottomLeftRadius'
  | 'webkitBorderBottomRightRadius'
  | 'webkitBorderImage'
  | 'webkitBorderRadius'
  | 'webkitBorderTopLeftRadius'
  | 'webkitBorderTopRightRadius'
  | 'webkitBoxAlign'
  | 'webkitBoxDirection'
  | 'webkitBoxFlex'
  | 'webkitBoxOrdinalGroup'
  | 'webkitBoxOrient'
  | 'webkitBoxPack'
  | 'webkitBoxSizing'
  | 'webkitColumnBreakAfter'
  | 'webkitColumnBreakBefore'
  | 'webkitColumnBreakInside'
  | 'webkitColumnCount'
  | 'webkitColumnGap'
  | 'webkitColumnRule'
  | 'webkitColumnRuleColor'
  | 'webkitColumnRuleStyle'
  | 'webkitColumnRuleWidth'
  | 'webkitColumnSpan'
  | 'webkitColumnWidth'
  | 'webkitColumns'
  | 'webkitFilter'
  | 'webkitFlex'
  | 'webkitFlexBasis'
  | 'webkitFlexDirection'
  | 'webkitFlexFlow'
  | 'webkitFlexGrow'
  | 'webkitFlexShrink'
  | 'webkitFlexWrap'
  | 'webkitJustifyContent'
  | 'webkitOrder'
  | 'webkitPerspective'
  | 'webkitPerspectiveOrigin'
  | 'webkitTapHighlightColor'
  | 'webkitTextFillColor'
  | 'webkitTextSizeAdjust'
  | 'webkitTransform'
  | 'webkitTransformOrigin'
  | 'webkitTransformStyle'
  | 'webkitTransition'
  | 'webkitTransitionDelay'
  | 'webkitTransitionDuration'
  | 'webkitTransitionProperty'
  | 'webkitTransitionTimingFunction'
  | 'webkitUserModify'
  | 'webkitUserSelect'
  | 'webkitWritingMode'
  | 'whiteSpace'
  | 'widows'
  | 'width'
  | 'wordBreak'
  | 'wordSpacing'
  | 'wordWrap'
  | 'writingMode'
  | 'zIndex'
  | 'zoom';

/**
 * A mapping of inline event name to event object type.
 *
 * This mapping is used to create the event listener properties for
 * the virtual DOM element attributes object. If a standardized or
 * widely supported name is missing, please open an issue to have it
 * added.
 *
 * The event names were collected from the following sources:
 *   - TypeScript's `lib.dom.d.ts` file
 *   - https://www.w3.org/TR/html5/index.html#attributes-1
 *   - https://html.spec.whatwg.org/multipage/webappapis.html#idl-definitions
 */
export type ElementEventMap = {
  onabort: UIEvent;
  onauxclick: MouseEvent;
  onblur: FocusEvent;
  oncanplay: Event;
  oncanplaythrough: Event;
  onchange: Event;
  onclick: MouseEvent;
  oncontextmenu: PointerEvent;
  oncopy: ClipboardEvent;
  oncuechange: Event;
  oncut: ClipboardEvent;
  ondblclick: MouseEvent;
  ondrag: DragEvent;
  ondragend: DragEvent;
  ondragenter: DragEvent;
  ondragexit: DragEvent;
  ondragleave: DragEvent;
  ondragover: DragEvent;
  ondragstart: DragEvent;
  ondrop: DragEvent;
  ondurationchange: Event;
  onemptied: Event;
  onended: ErrorEvent;
  onerror: ErrorEvent;
  onfocus: FocusEvent;
  oninput: Event;
  oninvalid: Event;
  onkeydown: KeyboardEvent;
  onkeypress: KeyboardEvent;
  onkeyup: KeyboardEvent;
  onload: Event;
  onloadeddata: Event;
  onloadedmetadata: Event;
  onloadend: Event;
  onloadstart: Event;
  onmousedown: MouseEvent;
  onmouseenter: MouseEvent;
  onmouseleave: MouseEvent;
  onmousemove: MouseEvent;
  onmouseout: MouseEvent;
  onmouseover: MouseEvent;
  onmouseup: MouseEvent;
  onmousewheel: WheelEvent;
  onpaste: ClipboardEvent;
  onpause: Event;
  onplay: Event;
  onplaying: Event;
  onpointercancel: PointerEvent;
  onpointerdown: PointerEvent;
  onpointerenter: PointerEvent;
  onpointerleave: PointerEvent;
  onpointermove: PointerEvent;
  onpointerout: PointerEvent;
  onpointerover: PointerEvent;
  onpointerup: PointerEvent;
  onprogress: ProgressEvent;
  onratechange: Event;
  onreset: Event;
  onscroll: UIEvent;
  onseeked: Event;
  onseeking: Event;
  onselect: UIEvent;
  onselectstart: Event;
  onstalled: Event;
  onsubmit: Event;
  onsuspend: Event;
  ontimeupdate: Event;
  onvolumechange: Event;
  onwaiting: Event;
};

/**
 * An object which represents a dataset for a virtual DOM element.
 *
 * The names of the dataset properties will be automatically prefixed
 * with `data-` before being added to the node, e.g. `{ thing: '12' }`
 * will be rendered as `data-thing='12'` in the DOM element.
 *
 * Dataset property names should not contain spaces.
 */
export type ElementDataset = {
  readonly [name: string]: string;
};

/**
 * The inline style for for a virtual DOM element.
 *
 * Style attributes use the JS camel-cased property names instead of
 * the CSS hyphenated names for performance and security.
 */
export type ElementInlineStyle = {
  readonly [T in CSSPropertyNames]?: string;
};

/**
 * The ARIA attributes for a virtual element node.
 *
 * These are the attributes which are applied to a real DOM element via
 * `element.setAttribute()`. The supported attribute names are defined
 * by the `ARIAAttrNames` type.
 */
export type ElementARIAAttrs = {
  readonly [T in ARIAAttrNames]?: string;
};

/**
 * The base attributes for a virtual element node.
 *
 * These are the attributes which are applied to a real DOM element via
 * `element.setAttribute()`. The supported attribute names are defined
 * by the `ElementAttrNames` type.
 *
 * Node attributes are specified using the lower-case HTML name instead
 * of the camel-case JS name due to browser inconsistencies in handling
 * the JS versions.
 */
export type ElementBaseAttrs = {
  readonly [T in ElementAttrNames]?: string;
};

/**
 * The inline event listener attributes for a virtual element node.
 *
 * The supported listeners are defined by the `ElementEventMap` type.
 */
export type ElementEventAttrs = {
  readonly [T in keyof ElementEventMap]?: (
    this: HTMLElement,
    event: ElementEventMap[T]
  ) => any;
};

/**
 * The special-cased attributes for a virtual element node.
 */
export type ElementSpecialAttrs = {
  /**
   * The key id for the virtual element node.
   *
   * If a node is given a key id, the generated DOM node will not be
   * recreated during a rendering update if it only moves among its
   * siblings in the render tree.
   *
   * In general, reordering child nodes will cause the nodes to be
   * completely re-rendered. Keys allow this to be optimized away.
   *
   * If a key is provided, it must be unique among sibling nodes.
   */
  readonly key?: string;

  /**
   * The JS-safe name for the HTML `class` attribute.
   */
  readonly className?: string;

  /**
   * The JS-safe name for the HTML `for` attribute.
   */
  readonly htmlFor?: string;

  /**
   * The dataset for the rendered DOM element.
   */
  readonly dataset?: ElementDataset;

  /**
   * The inline style for the rendered DOM element.
   */
  readonly style?: ElementInlineStyle;
};

/**
 * The full set of attributes supported by a virtual element node.
 *
 * This is the combination of the base element attributes, the the ARIA attributes,
 * the inline element event listeners, and the special element attributes.
 */
export type ElementAttrs = ElementBaseAttrs &
  ElementARIAAttrs &
  ElementEventAttrs &
  ElementSpecialAttrs;

/**
 * A virtual node which represents plain text content.
 *
 * #### Notes
 * User code will not typically create a `VirtualText` node directly.
 * Instead, the `h()` function will be used to create an element tree.
 */
export class VirtualText {
  /**
   * The text content for the node.
   */
  readonly content: string;

  /**
   * The type of the node.
   *
   * This value can be used as a type guard for discriminating the
   * `VirtualNode` union type.
   */
  readonly type: 'text' = 'text';

  /**
   * Construct a new virtual text node.
   *
   * @param content - The text content for the node.
   */
  constructor(content: string) {
    this.content = content;
  }
}

/**
 * A virtual node which represents an HTML element.
 *
 * #### Notes
 * User code will not typically create a `VirtualElement` node directly.
 * Instead, the `h()` function will be used to create an element tree.
 */
export class VirtualElement {
  /**
   * The tag name for the element.
   */
  readonly tag: string;

  /**
   * The attributes for the element.
   */
  readonly attrs: ElementAttrs;

  /**
   * The children for the element.
   */
  readonly children: ReadonlyArray<VirtualNode>;

  /**
   * An optional custom renderer for the element's children. If set, on render
   * this element's DOM node and it's attrs will be created/updated as normal.
   * At that point the DOM node is handed off to the renderer.
   */
  readonly renderer: VirtualElement.IRenderer | undefined;

  /**
   * The type of the node.
   *
   * This value can be used as a type guard for discriminating the
   * `VirtualNode` union type.
   */
  readonly type: 'element' = 'element';

  /**
   * Construct a new virtual element node.
   *
   * @param tag - The element tag name.
   *
   * @param attrs - The element attributes.
   *
   * @param children - The element children.
   *
   * @param renderer - An optional custom renderer for the element.
   */
  constructor(
    tag: string,
    attrs: ElementAttrs,
    children: ReadonlyArray<VirtualNode>,
    renderer?: VirtualElement.IRenderer
  ) {
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;

    this.renderer = renderer;
  }
}

export namespace VirtualElement {
  /**
   * A type describing a custom element renderer
   */
  export type IRenderer = {
    /**
     * Customize how a DOM node is rendered. If .renderer is set on a given
     * instance of VirtualElement, this function will be called every time
     * that VirtualElement is rendered.
     *
     * @param host - The actual DOM node created for a VirtualElement during
     * rendering.
     *
     * On render, host is created and its attrs are set/updated via
     * the standard routines in updateContent. host is then handed off to this
     * function.
     *
     * The render function is free to modify host. The only restriction is
     * is that render should not modify any attributes set by external
     * routines (ie updateContent), as this may cause thrashing when the
     * virtual element is next rendered.
     *
     * @param options - Will be populated with the .attrs and .children fields
     * set on the VirtualElement being rendered.
     */
    render: (
      host: HTMLElement,
      options?: { attrs?: ElementAttrs; children?: ReadonlyArray<VirtualNode> }
    ) => void;

    /**
     * Optional cleanup function for custom renderers. If the .renderer field
     * of a VirtualELement is set, and if .renderer.unrender is defined, when
     * the element is changed or removed its corresponding DOM element will be
     * passed to this function immediately before it is removed from the DOM.
     *
     * unrender is not required for for simple renderers, such as those
     * implemented using `document.createElement()`. However, for certain
     * rendering techniques explicit cleanup is required in order to avoid
     * resource leaks.
     *
     * For example, if render calls `ReactDOM.render(..., host)`, then
     * there has to also be a corresponding implementation of unrender that
     * calls `ReactDOM.unmountComponentAtNode(host)` in order to prevent
     * a memory leak.
     *
     * @param host - the DOM element to be removed.
     *
     * @param options - Will be populated with the .attrs and .children fields
     * set on the VirtualElement being unrendered.
     */
    unrender?: (
      host: HTMLElement,
      options?: { attrs?: ElementAttrs; children?: ReadonlyArray<VirtualNode> }
    ) => void;
  };
}

/**
 * DEPRECATED - use VirtualElement with a defined renderer param instead.
 * This class is provided as a backwards compatibility shim
 *
 * A "pass thru" virtual node whose children are managed by a render and an
 * unrender callback. The intent of this flavor of virtual node is to make
 * it easy to blend other kinds of virtualdom (eg React) into Phosphor's
 * virtualdom.
 *
 * #### Notes
 * User code will not typically create a `VirtualElementPass` node directly.
 * Instead, the `hpass()` function will be used to create an element tree.
 */
export class VirtualElementPass extends VirtualElement {
  /**
   * DEPRECATED - use VirtualElement with a defined renderer param instead
   *
   * Construct a new virtual element pass thru node.
   *
   * @param tag - the tag of the parent element of this node. Once the parent
   * element is rendered, it will be passed as an argument to
   * renderer.render
   *
   * @param attrs - attributes that will assigned to the
   * parent element
   *
   * @param renderer - an object with render and unrender
   * functions, each of which should take a single argument of type
   * HTMLElement and return nothing. If null, the parent element
   * will be rendered barren without any children.
   */
  constructor(
    tag: string,
    attrs: ElementAttrs,
    renderer: VirtualElementPass.IRenderer | null
  ) {
    super(tag, attrs, [], renderer || undefined);
  }
}

export namespace VirtualElementPass {
  /**
   * DEPRECATED - use VirtualElement.IRenderer instead
   *
   * A type describing a custom element renderer
   */
  export type IRenderer = VirtualElement.IRenderer;
}

/**
 * A type alias for a general virtual node.
 */
export type VirtualNode = VirtualElement | VirtualText;

/**
 * Create a new virtual element node.
 *
 * @param tag - The tag name for the element.
 *
 * @param attrs - The attributes for the element, if any.
 *
 * @param renderer - An optional custom renderer for the element.
 *
 * @param children - The children for the element, if any.
 *
 * @returns A new virtual element node for the given parameters.
 *
 * #### Notes
 * The children may be string literals, other virtual nodes, `null`, or
 * an array of those things. Strings are converted into text nodes, and
 * arrays are inlined as if the array contents were given as positional
 * arguments. This makes it simple to build up an array of children by
 * any desired means. `null` child values are simply ignored.
 *
 * A bound function for each HTML tag name is available as a static
 * function attached to the `h()` function. E.g. `h('div', ...)` is
 * equivalent to `h.div(...)`.
 */
export function h(tag: string, ...children: h.Child[]): VirtualElement;
export function h(
  tag: string,
  attrs: ElementAttrs,
  ...children: h.Child[]
): VirtualElement;
export function h(
  tag: string,
  renderer: VirtualElement.IRenderer,
  ...children: h.Child[]
): VirtualElement;
export function h(
  tag: string,
  attrs: ElementAttrs,
  renderer: VirtualElement.IRenderer,
  ...children: h.Child[]
): VirtualElement;
export function h(tag: string): VirtualElement {
  let attrs: ElementAttrs = {};
  let renderer: VirtualElement.IRenderer | undefined;
  let children: VirtualNode[] = [];
  for (let i = 1, n = arguments.length; i < n; ++i) {
    // eslint-disable-next-line prefer-rest-params
    let arg = arguments[i];
    if (typeof arg === 'string') {
      children.push(new VirtualText(arg));
    } else if (arg instanceof VirtualText) {
      children.push(arg);
    } else if (arg instanceof VirtualElement) {
      children.push(arg);
    } else if (arg instanceof Array) {
      extend(children, arg);
    } else if ((i === 1 || i === 2) && arg && typeof arg === 'object') {
      if ('render' in arg) {
        renderer = arg;
      } else {
        attrs = arg;
      }
    }
  }
  return new VirtualElement(tag, attrs, children, renderer);

  function extend(array: VirtualNode[], values: h.Child[]): void {
    for (let child of values) {
      if (typeof child === 'string') {
        array.push(new VirtualText(child));
      } else if (child instanceof VirtualText) {
        array.push(child);
      } else if (child instanceof VirtualElement) {
        array.push(child);
      }
    }
  }
}

/**
 * The namespace for the `h` function statics.
 */
export namespace h {
  /**
   * A type alias for the supported child argument types.
   */
  export type Child =
    | (string | VirtualNode | null)
    | Array<string | VirtualNode | null>;

  /**
   * A bound factory function for a specific `h()` tag.
   */
  export interface IFactory {
    (...children: Child[]): VirtualElement;
    (attrs: ElementAttrs, ...children: Child[]): VirtualElement;
    (
      renderer: VirtualElement.IRenderer,
      ...children: h.Child[]
    ): VirtualElement;
    (
      attrs: ElementAttrs,
      renderer: VirtualElement.IRenderer,
      ...children: h.Child[]
    ): VirtualElement;
  }

  export const a: IFactory = h.bind(undefined, 'a');
  export const abbr: IFactory = h.bind(undefined, 'abbr');
  export const address: IFactory = h.bind(undefined, 'address');
  export const area: IFactory = h.bind(undefined, 'area');
  export const article: IFactory = h.bind(undefined, 'article');
  export const aside: IFactory = h.bind(undefined, 'aside');
  export const audio: IFactory = h.bind(undefined, 'audio');
  export const b: IFactory = h.bind(undefined, 'b');
  export const bdi: IFactory = h.bind(undefined, 'bdi');
  export const bdo: IFactory = h.bind(undefined, 'bdo');
  export const blockquote: IFactory = h.bind(undefined, 'blockquote');
  export const br: IFactory = h.bind(undefined, 'br');
  export const button: IFactory = h.bind(undefined, 'button');
  export const canvas: IFactory = h.bind(undefined, 'canvas');
  export const caption: IFactory = h.bind(undefined, 'caption');
  export const cite: IFactory = h.bind(undefined, 'cite');
  export const code: IFactory = h.bind(undefined, 'code');
  export const col: IFactory = h.bind(undefined, 'col');
  export const colgroup: IFactory = h.bind(undefined, 'colgroup');
  export const data: IFactory = h.bind(undefined, 'data');
  export const datalist: IFactory = h.bind(undefined, 'datalist');
  export const dd: IFactory = h.bind(undefined, 'dd');
  export const del: IFactory = h.bind(undefined, 'del');
  export const dfn: IFactory = h.bind(undefined, 'dfn');
  export const div: IFactory = h.bind(undefined, 'div');
  export const dl: IFactory = h.bind(undefined, 'dl');
  export const dt: IFactory = h.bind(undefined, 'dt');
  export const em: IFactory = h.bind(undefined, 'em');
  export const embed: IFactory = h.bind(undefined, 'embed');
  export const fieldset: IFactory = h.bind(undefined, 'fieldset');
  export const figcaption: IFactory = h.bind(undefined, 'figcaption');
  export const figure: IFactory = h.bind(undefined, 'figure');
  export const footer: IFactory = h.bind(undefined, 'footer');
  export const form: IFactory = h.bind(undefined, 'form');
  export const h1: IFactory = h.bind(undefined, 'h1');
  export const h2: IFactory = h.bind(undefined, 'h2');
  export const h3: IFactory = h.bind(undefined, 'h3');
  export const h4: IFactory = h.bind(undefined, 'h4');
  export const h5: IFactory = h.bind(undefined, 'h5');
  export const h6: IFactory = h.bind(undefined, 'h6');
  export const header: IFactory = h.bind(undefined, 'header');
  export const hr: IFactory = h.bind(undefined, 'hr');
  export const i: IFactory = h.bind(undefined, 'i');
  export const iframe: IFactory = h.bind(undefined, 'iframe');
  export const img: IFactory = h.bind(undefined, 'img');
  export const input: IFactory = h.bind(undefined, 'input');
  export const ins: IFactory = h.bind(undefined, 'ins');
  export const kbd: IFactory = h.bind(undefined, 'kbd');
  export const label: IFactory = h.bind(undefined, 'label');
  export const legend: IFactory = h.bind(undefined, 'legend');
  export const li: IFactory = h.bind(undefined, 'li');
  export const main: IFactory = h.bind(undefined, 'main');
  export const map: IFactory = h.bind(undefined, 'map');
  export const mark: IFactory = h.bind(undefined, 'mark');
  export const meter: IFactory = h.bind(undefined, 'meter');
  export const nav: IFactory = h.bind(undefined, 'nav');
  export const noscript: IFactory = h.bind(undefined, 'noscript');
  export const object: IFactory = h.bind(undefined, 'object');
  export const ol: IFactory = h.bind(undefined, 'ol');
  export const optgroup: IFactory = h.bind(undefined, 'optgroup');
  export const option: IFactory = h.bind(undefined, 'option');
  export const output: IFactory = h.bind(undefined, 'output');
  export const p: IFactory = h.bind(undefined, 'p');
  export const param: IFactory = h.bind(undefined, 'param');
  export const pre: IFactory = h.bind(undefined, 'pre');
  export const progress: IFactory = h.bind(undefined, 'progress');
  export const q: IFactory = h.bind(undefined, 'q');
  export const rp: IFactory = h.bind(undefined, 'rp');
  export const rt: IFactory = h.bind(undefined, 'rt');
  export const ruby: IFactory = h.bind(undefined, 'ruby');
  export const s: IFactory = h.bind(undefined, 's');
  export const samp: IFactory = h.bind(undefined, 'samp');
  export const section: IFactory = h.bind(undefined, 'section');
  export const select: IFactory = h.bind(undefined, 'select');
  export const small: IFactory = h.bind(undefined, 'small');
  export const source: IFactory = h.bind(undefined, 'source');
  export const span: IFactory = h.bind(undefined, 'span');
  export const strong: IFactory = h.bind(undefined, 'strong');
  export const sub: IFactory = h.bind(undefined, 'sub');
  export const summary: IFactory = h.bind(undefined, 'summary');
  export const sup: IFactory = h.bind(undefined, 'sup');
  export const table: IFactory = h.bind(undefined, 'table');
  export const tbody: IFactory = h.bind(undefined, 'tbody');
  export const td: IFactory = h.bind(undefined, 'td');
  export const textarea: IFactory = h.bind(undefined, 'textarea');
  export const tfoot: IFactory = h.bind(undefined, 'tfoot');
  export const th: IFactory = h.bind(undefined, 'th');
  export const thead: IFactory = h.bind(undefined, 'thead');
  export const time: IFactory = h.bind(undefined, 'time');
  export const title: IFactory = h.bind(undefined, 'title');
  export const tr: IFactory = h.bind(undefined, 'tr');
  export const track: IFactory = h.bind(undefined, 'track');
  export const u: IFactory = h.bind(undefined, 'u');
  export const ul: IFactory = h.bind(undefined, 'ul');
  export const var_: IFactory = h.bind(undefined, 'var');
  export const video: IFactory = h.bind(undefined, 'video');
  export const wbr: IFactory = h.bind(undefined, 'wbr');
}

/**
 * DEPRECATED - pass the renderer arg to the h function instead
 *
 * Create a new "pass thru" virtual element node.
 *
 * @param tag - The tag name for the parent element.
 *
 * @param attrs - The attributes for the parent element, if any.
 *
 * @param renderer - an object with render and unrender functions, if any.
 *
 * @returns A new "pass thru" virtual element node for the given parameters.
 *
 */
export function hpass(
  tag: string,
  renderer?: VirtualElementPass.IRenderer
): VirtualElementPass;
export function hpass(
  tag: string,
  attrs: ElementAttrs,
  renderer?: VirtualElementPass.IRenderer
): VirtualElementPass;
export function hpass(tag: string): VirtualElementPass {
  let attrs: ElementAttrs = {};
  let renderer: VirtualElementPass.IRenderer | null = null;

  if (arguments.length === 2) {
    // eslint-disable-next-line prefer-rest-params
    const arg = arguments[1];

    if ('render' in arg) {
      renderer = arg;
    } else {
      attrs = arg;
    }
  } else if (arguments.length === 3) {
    // eslint-disable-next-line prefer-rest-params
    attrs = arguments[1];
    // eslint-disable-next-line prefer-rest-params
    renderer = arguments[2];
  } else if (arguments.length > 3) {
    throw new Error('hpass() should be called with 1, 2, or 3 arguments');
  }

  return new VirtualElementPass(tag, attrs, renderer);
}

/**
 * The namespace for the virtual DOM rendering functions.
 */
export namespace VirtualDOM {
  /**
   * Create a real DOM element from a virtual element node.
   *
   * @param node - The virtual element node to realize.
   *
   * @returns A new DOM element for the given virtual element node.
   *
   * #### Notes
   * This creates a brand new *real* DOM element with a structure which
   * matches the given virtual DOM node.
   *
   * If virtual diffing is desired, use the `render` function instead.
   */
  export function realize(node: VirtualText): Text;
  export function realize(node: VirtualElement): HTMLElement;
  export function realize(node: VirtualNode): HTMLElement | Text {
    return Private.createDOMNode(node);
  }

  /**
   * Render virtual DOM content into a host element.
   *
   * @param content - The virtual DOM content to render.
   *
   * @param host - The host element for the rendered content.
   *
   * #### Notes
   * This renders the delta from the previous rendering. It assumes that
   * the content of the host element is not manipulated by external code.
   *
   * Providing `null` content will clear the rendering.
   *
   * Externally modifying the provided content or the host element will
   * result in undefined rendering behavior.
   */
  export function render(
    content: VirtualNode | ReadonlyArray<VirtualNode> | null,
    host: HTMLElement
  ): void {
    let oldContent = Private.hostMap.get(host) || [];
    let newContent = Private.asContentArray(content);
    Private.hostMap.set(host, newContent);
    Private.updateContent(host, oldContent, newContent);
  }
}

/**
 * The namespace for the module implementation details.
 */
namespace Private {
  /**
   * A weak mapping of host element to virtual DOM content.
   */
  export const hostMap = new WeakMap<HTMLElement, ReadonlyArray<VirtualNode>>();

  /**
   * Cast a content value to a content array.
   */
  export function asContentArray(
    value: VirtualNode | ReadonlyArray<VirtualNode> | null
  ): ReadonlyArray<VirtualNode> {
    if (!value) {
      return [];
    }
    if (value instanceof Array) {
      return value as ReadonlyArray<VirtualNode>;
    }
    return [value as VirtualNode];
  }

  /**
   * Create a new DOM element for a virtual node.
   */
  export function createDOMNode(node: VirtualText): Text;
  export function createDOMNode(node: VirtualElement): HTMLElement;
  export function createDOMNode(node: VirtualNode): HTMLElement | Text;
  export function createDOMNode(
    node: VirtualNode,
    host: HTMLElement | null
  ): HTMLElement | Text;
  export function createDOMNode(
    node: VirtualNode,
    host: HTMLElement | null,
    before: Node | null
  ): HTMLElement | Text;
  export function createDOMNode(node: VirtualNode): HTMLElement | Text {
    // eslint-disable-next-line prefer-rest-params
    let host = arguments[1] || null;
    // eslint-disable-next-line prefer-rest-params
    const before = arguments[2] || null;

    if (host) {
      host.insertBefore(createDOMNode(node), before);
    } else {
      // Create a text node for a virtual text node.
      if (node.type === 'text') {
        return document.createTextNode(node.content);
      }

      // Create the HTML element with the specified tag.
      host = document.createElement(node.tag);

      // Add the attributes for the new element.
      addAttrs(host, node.attrs);

      if (node.renderer) {
        node.renderer.render(host, {
          attrs: node.attrs,
          children: node.children
        });
        return host;
      }

      // Recursively populate the element with child content.
      for (let i = 0, n = node.children.length; i < n; ++i) {
        createDOMNode(node.children[i], host);
      }
    }

    return host;
  }

  /**
   * Update a host element with the delta of the virtual content.
   *
   * This is the core "diff" algorithm. There is no explicit "patch"
   * phase. The host is patched at each step as the diff progresses.
   */
  export function updateContent(
    host: HTMLElement,
    oldContent: ReadonlyArray<VirtualNode>,
    newContent: ReadonlyArray<VirtualNode>
  ): void {
    // Bail early if the content is identical.
    if (oldContent === newContent) {
      return;
    }

    // Collect the old keyed elems into a mapping.
    let oldKeyed = collectKeys(host, oldContent);

    // Create a copy of the old content which can be modified in-place.
    let oldCopy = oldContent.slice();

    // Update the host with the new content. The diff always proceeds
    // forward and never modifies a previously visited index. The old
    // copy array is modified in-place to reflect the changes made to
    // the host children. This causes the stale nodes to be pushed to
    // the end of the host node and removed at the end of the loop.
    let currElem = host.firstChild;
    let newCount = newContent.length;
    for (let i = 0; i < newCount; ++i) {
      // If the old content is exhausted, create a new node.
      if (i >= oldCopy.length) {
        createDOMNode(newContent[i], host);
        continue;
      }

      // Lookup the old and new virtual nodes.
      let oldVNode = oldCopy[i];
      let newVNode = newContent[i];

      // If both elements are identical, there is nothing to do.
      if (oldVNode === newVNode) {
        currElem = currElem!.nextSibling;
        continue;
      }

      // Handle the simplest case of in-place text update first.
      if (oldVNode.type === 'text' && newVNode.type === 'text') {
        // Avoid spurious updates for performance.
        if (currElem!.textContent !== newVNode.content) {
          currElem!.textContent = newVNode.content;
        }
        currElem = currElem!.nextSibling;
        continue;
      }

      // If the old or new node is a text node, the other node is now
      // known to be an element node, so create and insert a new node.
      if (oldVNode.type === 'text' || newVNode.type === 'text') {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }

      // If the old XOR new node has a custom renderer,
      // create and insert a new node.
      if (!oldVNode.renderer != !newVNode.renderer) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }

      // At this point, both nodes are known to be element nodes.

      // If the new elem is keyed, move an old keyed elem to the proper
      // location before proceeding with the diff. The search can start
      // at the current index, since the unmatched old keyed elems are
      // pushed forward in the old copy array.
      let newKey = newVNode.attrs.key;
      if (newKey && newKey in oldKeyed) {
        let pair = oldKeyed[newKey];
        if (pair.vNode !== oldVNode) {
          ArrayExt.move(oldCopy, oldCopy.indexOf(pair.vNode, i + 1), i);
          host.insertBefore(pair.element, currElem);
          oldVNode = pair.vNode;
          currElem = pair.element;
        }
      }

      // If both elements are identical, there is nothing to do.
      if (oldVNode === newVNode) {
        currElem = currElem!.nextSibling;
        continue;
      }

      // If the old elem is keyed and does not match the new elem key,
      // create a new node. This is necessary since the old keyed elem
      // may be matched at a later point in the diff.
      let oldKey = oldVNode.attrs.key;
      if (oldKey && oldKey !== newKey) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }

      // If the tags are different, create a new node.
      if (oldVNode.tag !== newVNode.tag) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }

      // At this point, the element can be updated in-place.

      // Update the element attributes.
      updateAttrs(currElem as HTMLElement, oldVNode.attrs, newVNode.attrs);

      // Update the element content.
      if (newVNode.renderer) {
        newVNode.renderer.render(currElem as HTMLElement, {
          attrs: newVNode.attrs,
          children: newVNode.children
        });
      } else {
        updateContent(
          currElem as HTMLElement,
          oldVNode.children,
          newVNode.children
        );
      }

      // Step to the next sibling element.
      currElem = currElem!.nextSibling;
    }

    // Cleanup stale DOM
    removeContent(host, oldCopy, newCount, true);
  }

  /**
   * Handle cleanup of stale vdom and its associated DOM. The host node is
   * traversed recursively (in depth-first order), and any explicit cleanup
   * required by a child node is carried out when it is visited (eg if a node
   * has a custom renderer, the renderer.unrender function will be called).
   * Once the subtree beneath each child of host has been completely visited,
   * that child will be removed via a call to host.removeChild.
   */
  function removeContent(
    host: HTMLElement,
    oldContent: ReadonlyArray<VirtualNode>,
    newCount: number,
    _sentinel: boolean
  ) {
    // Dispose of the old nodes pushed to the end of the host.
    for (let i = oldContent.length - 1; i >= newCount; --i) {
      const oldNode = oldContent[i];
      const child = (_sentinel
        ? host.lastChild
        : host.childNodes[i]) as HTMLElement;

      // recursively clean up host children
      if (oldNode.type === 'text') {
        // pass
      } else if (oldNode.renderer && oldNode.renderer.unrender) {
        oldNode.renderer.unrender(child!, {
          attrs: oldNode.attrs,
          children: oldNode.children
        });
      } else {
        removeContent(child!, oldNode.children, 0, false);
      }

      if (_sentinel) {
        host.removeChild(child!);
      }
    }
  }

  /**
   * A set of special-cased attribute names.
   */
  const specialAttrs = {
    key: true,
    className: true,
    htmlFor: true,
    dataset: true,
    style: true
  };

  /**
   * Add element attributes to a newly created HTML element.
   */
  function addAttrs(element: HTMLElement, attrs: ElementAttrs): void {
    // Add the inline event listeners and node attributes.
    for (let name in attrs) {
      if (name in specialAttrs) {
        continue;
      }
      if (name.substr(0, 2) === 'on') {
        (element as any)[name] = (attrs as any)[name];
      } else {
        element.setAttribute(name, (attrs as any)[name]);
      }
    }

    // Add the element `class` attribute.
    if (attrs.className !== undefined) {
      element.setAttribute('class', attrs.className);
    }

    // Add the element `for` attribute.
    if (attrs.htmlFor !== undefined) {
      element.setAttribute('for', attrs.htmlFor);
    }

    // Add the dataset values.
    if (attrs.dataset) {
      addDataset(element, attrs.dataset);
    }

    // Add the inline styles.
    if (attrs.style) {
      addStyle(element, attrs.style);
    }
  }

  /**
   * Update the element attributes of an HTML element.
   */
  function updateAttrs(
    element: HTMLElement,
    oldAttrs: ElementAttrs,
    newAttrs: ElementAttrs
  ): void {
    // Do nothing if the attrs are the same object.
    if (oldAttrs === newAttrs) {
      return;
    }

    // Setup the strongly typed loop variable.
    let name: keyof ElementAttrs;

    // Remove attributes and listeners which no longer exist.
    for (name in oldAttrs) {
      if (name in specialAttrs || name in newAttrs) {
        continue;
      }
      if (name.substr(0, 2) === 'on') {
        (element as any)[name] = null;
      } else {
        element.removeAttribute(name);
      }
    }

    // Add and update new and existing attributes and listeners.
    for (name in newAttrs) {
      if (name in specialAttrs || oldAttrs[name] === newAttrs[name]) {
        continue;
      }
      if (name.substr(0, 2) === 'on') {
        (element as any)[name] = (newAttrs as any)[name];
      } else {
        element.setAttribute(name, (newAttrs as any)[name]);
      }
    }

    // Update the element `class` attribute.
    if (oldAttrs.className !== newAttrs.className) {
      if (newAttrs.className !== undefined) {
        element.setAttribute('class', newAttrs.className);
      } else {
        element.removeAttribute('class');
      }
    }

    // Add the element `for` attribute.
    if (oldAttrs.htmlFor !== newAttrs.htmlFor) {
      if (newAttrs.htmlFor !== undefined) {
        element.setAttribute('for', newAttrs.htmlFor);
      } else {
        element.removeAttribute('for');
      }
    }

    // Update the dataset values.
    if (oldAttrs.dataset !== newAttrs.dataset) {
      updateDataset(element, oldAttrs.dataset || {}, newAttrs.dataset || {});
    }

    // Update the inline styles.
    if (oldAttrs.style !== newAttrs.style) {
      updateStyle(element, oldAttrs.style || {}, newAttrs.style || {});
    }
  }

  /**
   * Add dataset values to a newly created HTML element.
   */
  function addDataset(element: HTMLElement, dataset: ElementDataset): void {
    for (let name in dataset) {
      element.setAttribute(`data-${name}`, dataset[name]);
    }
  }

  /**
   * Update the dataset values of an HTML element.
   */
  function updateDataset(
    element: HTMLElement,
    oldDataset: ElementDataset,
    newDataset: ElementDataset
  ): void {
    for (let name in oldDataset) {
      if (!(name in newDataset)) {
        element.removeAttribute(`data-${name}`);
      }
    }
    for (let name in newDataset) {
      if (oldDataset[name] !== newDataset[name]) {
        element.setAttribute(`data-${name}`, newDataset[name]);
      }
    }
  }

  /**
   * Add inline style values to a newly created HTML element.
   */
  function addStyle(element: HTMLElement, style: ElementInlineStyle): void {
    let elemStyle = element.style;
    let name: keyof ElementInlineStyle;
    for (name in style) {
      (elemStyle as any)[name] = style[name];
    }
  }

  /**
   * Update the inline style values of an HTML element.
   */
  function updateStyle(
    element: HTMLElement,
    oldStyle: ElementInlineStyle,
    newStyle: ElementInlineStyle
  ): void {
    let elemStyle = element.style;
    let name: keyof ElementInlineStyle;
    for (name in oldStyle) {
      if (!(name in newStyle)) {
        (elemStyle as any)[name] = '';
      }
    }
    for (name in newStyle) {
      if (oldStyle[name] !== newStyle[name]) {
        (elemStyle as any)[name] = newStyle[name];
      }
    }
  }

  /**
   * A mapping of string key to pair of element and rendered node.
   */
  type KeyMap = {
    [key: string]: { vNode: VirtualElement; element: HTMLElement };
  };

  /**
   * Collect a mapping of keyed elements for the host content.
   */
  function collectKeys(
    host: HTMLElement,
    content: ReadonlyArray<VirtualNode>
  ): KeyMap {
    let node = host.firstChild;
    let keyMap: KeyMap = Object.create(null);
    for (let vNode of content) {
      if (vNode.type === 'element' && vNode.attrs.key) {
        keyMap[vNode.attrs.key] = { vNode, element: node as HTMLElement };
      }
      node = node!.nextSibling;
    }
    return keyMap;
  }
}
