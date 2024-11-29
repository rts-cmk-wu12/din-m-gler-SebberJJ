interface HouseDetailProps {
    id: string;
    adress1: string;
    basementsize: number;
    built: number;
    city: string;
    cost: number;
    description: string;
    energylabel: string;
    gross: number;
    lat: number;
    livingspace: number;
    long: number;
    lotsize: number;
    netto: number;
    payment: number;
    postalcode: number;
    price: number;
    remodel: number;
    rooms: string;
    type: string;
}

export default function HouseDetail2(props: HouseDetailProps) {
    return (
        <div className="flex w-full justify-center items-center">

        <div className="flex justify-between w-3/5 border-t pt-5">
            <div className="flex flex-col">
                <div>
                    <p>Sagsnummer:</p>
                    <p>{props.id}</p>
                </div>
                <div>
                    <p>Boligareal:</p>
                    <p>{props.livingspace}</p>
                </div>
                <div>
                    <p>Grundareal:</p>
                    <p>{props.lotsize}</p>
                </div>
                <div>
                    <p>Rum/værelser:</p>
                    <p>{props.rooms}</p>
                </div>
                <div>
                    <p>Antal Plan:</p>
                    <p>-</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <p>Kælder:</p>
                    <p>{props.basementsize}</p>
                </div>
                <div>
                    <p>Byggeår:</p>
                    <p>{props.built}</p>
                </div>
                <div>
                    <p>Ombygget:</p>
                    <p>{props.remodel}</p>
                </div>
                <div>
                    <p>Energimærke:</p>
                    <p>{props.energylabel}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <p>Udbetaling:</p>
                    <p>{props.payment}</p>
                </div>
                <div>
                    <p>Brutto ex ejerudgift:</p>
                    <p>{props.gross}</p>
                </div>
                <div>
                    <p>Netto ex ejerudgift:</p>
                    <p>{props.netto}</p>
                </div>
                <div>
                    <p>Ejerudgifter:</p>
                    <p>{props.cost}</p>
                </div>
            </div>
        </div>
        </div>
    )
}