export  enum PaymentServiceType {
    MobileMoney = "MobileMoney",
    Bancaire = "Bancaire",
    Cash = "Cash"
}

export type Transaction = {
    id: string,
    source: string,
    id_entity_source: string,
    fee: number,
    status: string,
    created_at: string,
}


export type UserPorps = {
    id?: string,
    username?: string,
    email: string,
    password: string
}