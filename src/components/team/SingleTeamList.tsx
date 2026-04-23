interface DataType {
    listTitle?: string;
    memberInfo: {
        id: number;
        title: string;
        description: string;
    }[];
}

const SingleTeamList = ({ list }: { list: DataType }) => {
    const { listTitle, memberInfo } = list;

    return (
        <>
            <div className="team-list-item">
                <h4>{[listTitle]}</h4>
                <ul>
                    {memberInfo.map(info =>
                        <li key={info.id}>
                            <h5>{[info.title]}</h5>
                            <p>{[info.description]}</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default SingleTeamList;