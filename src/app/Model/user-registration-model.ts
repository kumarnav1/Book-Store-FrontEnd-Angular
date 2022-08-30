export class UserRegistrationModel {
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    dateOfBirth!: Date;
    registrationDate!: Date;
    socialSecurityNumber!: string;

    constructor(firstName:string, lastName:string, email:string, password:string, socialSecurityNumber:string ,dateOfBirth:Date, registrationDate:Date){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.socialSecurityNumber=socialSecurityNumber;
        this.dateOfBirth=dateOfBirth;
        this.registrationDate=registrationDate;
    
    }
}
