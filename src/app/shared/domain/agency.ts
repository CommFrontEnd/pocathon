export class Agency {
    id : string;
    label : string;
    openingHours : OpeningHour[];
    coordinates : Coordinate[];
    adress : string;
}

export class OpeningHour {
    hour : string;
}

export class Coordinate {

}