import Clock from "../../atoms/icon/clock";
import Text from "../../atoms/text/text";

function ReadTime(props) {
    const { clock, time, label, rest } = props;
    return (
        <div>
            <Text {...rest}><Clock {...clock}></Clock> {time}{label}</Text>
        </div>

    )
}

export default ReadTime