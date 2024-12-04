interface HouseDetailProps {
    id: string;
    adress1: string;
    basementsize: number;
    built: number;
    city: string;
    cost: number | string;
    description: string;
    energylabel: string;
    gross: number | string;
    lat: number;
    livingspace: number;
    long: number;
    lotsize: number;
    netto: number | string;
    payment: number | string;
    postalcode: number;
    price: number | string;
    remodel: number;
    rooms: string;
    type: string;
}

export default function HouseDetail2(props: HouseDetailProps) {
    return (
        <div className="flex w-full justify-center items-center">

        <div className="flex justify-between w-3/5 border-t pt-5 gap-5">
            <div className="flex flex-col w-1/5">
                <div className="flex justify-between">
                    <p>Sagsnummer:</p>
                    <p>8934765</p>
                </div>
                <div className="flex justify-between">
                    <p>Boligareal:</p>
                    <p>{props.livingspace}</p>
                </div>
                <div className="flex justify-between">
                    <p>Grundareal:</p>
                    <p>{props.lotsize}</p>
                </div>
                <div className="flex justify-between">
                    <p>Rum/værelser:</p>
                    <p>{props.rooms}</p>
                </div>
                <div className="flex justify-between">
                    <p>Antal Plan:</p>
                    <p>-</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <div className="flex justify-between">
                    <p>Kælder:</p>
                    <p>{props.basementsize}</p>
                </div>
                <div className="flex justify-between">
                    <p>Byggeår:</p>
                    <p>{props.built}</p>
                </div>
                <div className="flex justify-between">
                    <p>Ombygget:</p>
                    <p>{props.remodel}</p>
                </div>
                <div className="flex justify-between">
                    <p>Energimærke:</p>
                    <p>{props.energylabel}</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <div className="flex justify-between">
                    <p>Udbetaling:</p>
                    <p>{props.payment}</p>
                </div>
                <div className="flex justify-between">
                    <p>Brutto ex ejerudgift:</p>
                    <p>{props.gross}</p>
                </div>
                <div className="flex justify-between">
                    <p>Netto ex ejerudgift:</p>
                    <p>{props.netto}</p>
                </div>
                <div className="flex justify-between">
                    <p>Ejerudgifter:</p>
                    <p>{props.cost}</p>
                </div>
            </div>
        </div>
        </div>
    )
}