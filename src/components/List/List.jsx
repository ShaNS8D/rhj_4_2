import moment from "moment";
import "moment/locale/ru";
import { v4 as uuidv4 } from 'uuid';
import ListItem from "../ListItem/ListItem";

const List = (props) => {
  const { data, onRemove, onEdit } = props;

  if (!data.length) {
    return null;
  }

  const sortedDate = data.sort((a, b) => moment(b.date) - moment(a.date));

  return (
      <ul>
        {sortedDate.map((i) => {
          return (
            <ListItem
              key={uuidv4()}
              step={i}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
  );
}

export default List;