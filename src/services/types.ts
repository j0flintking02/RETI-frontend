export interface customError {
    data: string;
    status: string | number;
}

export interface User {
    id: number;
    guid: string;
    tenant_guid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    district_id: string;
    group_id: string;
    user_type: any;
}

export interface LoginResponseType {
    user?: User;
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