import { Account } from '../domain/account';
import { Client } from '../domain/client';
import { Operation } from '../domain/operation';

export const CLIENTS: Client = {
    id: "000000001",
    accountsList: ["01", "02"],
    label: "my label"
};

export const ACCOUNTS: Account[] = [{
    id: "01",
    balance: 20,
    operationsList: [
        "002",
        "003"
    ],
    currency: "euros",
    accountNumber: "0000000000000000"
}, {
    id: "02",
    balance: 22,
    operationsList: [
        "001",
        "004"
    ],
    currency: "euros",
    accountNumber: "0000000000000001"
}];

export const OPERATIONS: Operation[] = [{
    id: "001",
    type: "virement",
    label: "Loyer Novembre",
    categorie: "impot",
    montant: -10.3,
    currency: "euros",
    date: 123456789,
    sourceOrBeneficiary: "Loïc"
}, {
    id: "002",
    type: "virement",
    label: "Loyer Octobre",
    categorie: "impot",
    montant: -90.3,
    currency: "euros",
    date: 123456789,
    sourceOrBeneficiary: "Loïc"
}, {
    id: "003",
    type: "virement",
    label: "Loyer Septembre",
    categorie: "impot",
    montant: -2.7,
    currency: "euros",
    date: 123456789,
    sourceOrBeneficiary: "Loïc"
}, {
    id: "004",
    type: "virement",
    label: "Loyer Février",
    categorie: "impot",
    montant: 6.3,
    currency: "euros",
    date: 123456789,
    sourceOrBeneficiary: "Loïc"
}];