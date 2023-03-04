interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

interface Image {
    _type: "image";
    asset: {
        _ref: string,
        _type: "reference",
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInfomation: string;
    email: string;
    role: string;
    HeroImage: Image;
    name: string;
    phoneNumber: string;
    proficePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    description: string;
    technologies: Technology[],
}

export interface Social extends SanityBody {
    _type: "social",
    title: string,
    url: string,
}

