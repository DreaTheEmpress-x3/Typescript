export interface Card {
    content: Content[];
}

export interface Content {
    name: string;
    img: string;
    information: Information;
    text: string;
}

export interface Information {
    strength: number;
    lives: number;
}

export interface ParentElement {
    html: HTML[];
}

export interface HTML {
    parent:      Parent;
    child?:      Parent[];
    innerChild?: InnerChild[];
}

export interface Parent {
    type: string;
    id:   string;
}

export interface InnerChild {
    type:   string;
    class?: string;
    id?:    string;
}
