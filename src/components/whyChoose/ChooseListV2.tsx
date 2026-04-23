
interface DataType {
    title?: string;
    description?: string;
}

const ChooseListV2 = ({ list }: { list: DataType }) => {
    const { title, description } = list;

    return (
        <>
            <li>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </li>
        </>
    );
};

export default ChooseListV2;