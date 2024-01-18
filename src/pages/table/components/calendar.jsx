import { Badge, Calendar } from 'antd';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        {
          type: 'success',
          content: 'Web dasturlash',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'success',
          content: 'SMM',
        },
      ];
      break;
    case 12:
      listData = [
        {
          type: 'success',
          content: 'SMM',
        },
      ];
      break;
    case 22:
      listData = [
        {
          type: 'success',
          content: 'Web dasturlash',
        },
      ];
      break;
    case 26:
      listData = [
        {
          type: 'success',
          content: 'Web va grafik dizayn',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const Cal = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default Cal;
