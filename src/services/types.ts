export interface customError {
    data: string;
    status: string | number;
}
export interface User {
    bio: any;
    gender: any;
    phoneNumber: any;
    user: any;
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
    password: string
    createdAt: string
}

export interface UserDataType {
    id: number
    userId: number
    profileImage: any
    skills: any[]
    stakeholderLinks: any
    bio: any
    location: any
    phoneNumber: string
    dateOfBirth: string
    gender: string
    createdAt: string
    updatedAt: string
    user: User
}

export interface LoginResponseType {
    user?: User;
    access_token?: string;
}


export interface ProfileResponseType {
    data?: User;
    access_token?: string;
}


// Define TabItem interface
export interface TabItem {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
}

// Define TabsProps type
export type TabsProps = {
    items: TabItem[];
};

export interface SectionsPageProps {
    sectionsData: {
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneNumber?: string;
        dateOfBirth?: string;
        role?: string
    };
    setSectionsData: React.Dispatch<React.SetStateAction<{ role: string } | null>>;
}