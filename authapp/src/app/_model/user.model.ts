export interface userregister {
    userName: string;
    name: string;
    phone: string;
    email: string;
    password: string
}

export interface registerconfirm {
    userid: number;
    username: string;
    otptext: string;
} 


export interface usercred {
    username: string;
    password: string;
} 

export interface loginresp {
    token: string;
    refreshtoken:string;
    userRole:string;
}

export interface menu {
    code: string;
    name:string;
}

