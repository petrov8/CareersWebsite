import { AuthService } from '../app/auth/auth.api.service';
import { returnLocalStorageItem } from 'src/app/support/userMgmt';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class UserStatusService {

    constructor(private authService: AuthService){}

    isLoggedIn(){
        return this.authService.isLoggenIn$
    }


    isRecruiter(){
        
        let status = returnLocalStorageItem("_role") === "recruiter" ? true : false 
        return status 
    }

    isAdmin(){

        let status = returnLocalStorageItem("_role") === "admin" ? true : false 
        return status 

    }

    isJobSeeker(){


        let status = returnLocalStorageItem("_role") === "visitor" ? true : false 
        return status 

    }


    canEditPosts(){
        
        let status = returnLocalStorageItem("_role") !== "visitor" ? true : false 
        return status 

    }

}