import { Injectable } from '@angular/core';

import { ILogin } from 'src/app/components/login/login.interface';

import { resolve } from 'url';

@Injectable()
export class AccountService {

    private mockUserItem: IAccount[] = [{
        id: 1,
        firstname: 'admin',
        lastname: '',
        email: 'admin@gmail.com',
        password: '123456',
        position: 'manager',
        image: '',
        created: new Date(),
        updated: new Date()
    }
    ];

    // onUpdateProfile(accessToken: string, model: IProfile) {
    //     return new Promise((resolve, reject) => {
    //         const userProfile = this.mockUserItem.find(user => user.id == accessToken);
    //         if (!userProfile) return reject({ Message: 'Không tồn tại tài khoản!' });
    //         userProfile.firstname = model.firstname;
    //         userProfile.lastname = model.lastname;
    //         userProfile.position = model.position;
    //         userProfile.image = model.image;
    //         userProfile.updated = new Date();
    //         resolve(userProfile);
    //     })
    // }

    getUserLogin(accessToken: string) {
        return new Promise<IAccount>((resolve, reject) => {
            const userLogin = this.mockUserItem.find(m => m.id == accessToken);
            if (!userLogin)
                return reject({ Message: 'accessToken không đúng' })
            resolve(userLogin);
        })
    }

    onLogin(model: ILogin) {
        return new Promise<{ accessToken: string }>((resolve, reject) => {
            const userLogin = this.mockUserItem.find(item => item.email === model.email && item.password === model.password);
            if (!userLogin) { return reject({ Message: 'Tên người dùng hoặc mật khẩu không đúng' }); }
            resolve({
                accessToken: userLogin.id
            });
        });
    }

    // onRegister(model: IRegister) {
    //     return new Promise((resolve, reject) => {
    //         // resolve({Message: 'Error from Server'});
    //         // model.id = Math.random();
    //         // this.mockUserItem.push(model);
    //         // resolve(model);
    //     });
    // }
}

export interface IAccount {
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    id?: any;
    position?: string;
    image?: string;
    created?: Date;
    updated?: Date;
}
