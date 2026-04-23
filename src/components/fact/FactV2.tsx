import Counter from "../counter/Counter";

interface DataType {
    value: number;
    unit?: string;
    label?: string;
}

const FactV2 = ({ fact }: { fact: DataType }) => {
    const { value, unit, label } = fact;

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer">
                        <Counter end={value} />
                    </div>
                    <div className="operator">{unit}</div>
                </div>
                <span className="medium">{label}</span>
            </div>
        </>
    );
};

export default FactV2;