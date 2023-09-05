
const Currentcy: React.FC<{ extention: "FCFA" | "USDT" | "NKAP", amount: number }> = ({ extention, amount }) => {

    const options = {
        style: 'currency', currency: 'XAF', maximumFractionDigits: 2,
    };
    const numberFormat = new Intl.NumberFormat('fr-CM', options);

    const parts = numberFormat.formatToParts(amount);
    const partValues = parts.map(p => p.value);

    partValues.pop()


    return <> {partValues.join("") + " " + extention}</>

}

export default Currentcy;