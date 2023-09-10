export interface UserActiveProviderModel {
    uid:string;
    displayName:string;
    email:string;
    photoURL:string;
}

export interface UserActiveModel {
    id:string;
    displayName:string;
    email:string;
    photoURL:string;
    sex:string;
    phone:string;
}
export interface UserPostDatabase {
    displayName:string;
    email:string;
    photoURL:string;
    sex:string;
    phone:string;
}