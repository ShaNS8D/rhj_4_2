const ListItem = (props) => {
  if (!props) {
    return null;
  }

  const { step, onRemove, onEdit } = props;

  return (
    <>
      <li data-id={step.id}>
        <div className="list-item">
          <div className="item-content">
            <span>{step.date}</span>
            <span>{step.distance}</span>
          </div>
          <div className="list-item-btns-block">
            <button
              className="edit"
              onClick={() => onRemove(step.id)}
            ></button>
            <button
              className="remove"
              onClick={() => onEdit(step.id)}
            ></button>
          </div>
        </div>
      </li>
    </>
  );
}

export default ListItem;