export class Mobile {
    mobileID: number;
    mobileName: string;
    mobilePrice: number;
    constructor(id, name, price) {
        this.mobileID = id;
        this.mobileName = name;
        this.mobilePrice = price;
    }
    printMobile() {
        console.log("\n");
        console.log("Mobile ID:" + this.mobileID + "\nMobile Model:" + this.mobileName + 
        "\nMobile Price:" + this.mobilePrice);


    }

}
