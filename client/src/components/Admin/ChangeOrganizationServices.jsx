import { useState, useEffect } from 'react';
import { fetchService } from '../../api/serviceAPI';
import { ICONS, SERVICE_ITEM_ROUTE } from '../../utils/const';
import Box from '../Box/Box';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Element from '../Element/Element';

function ChangeOrganizationServices({ showHandler, services }) {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Доступные услуги',
      items: [],
    },
    {
      id: 2,
      title: 'Услуги организации',
      items: [],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchService().then((data) => {
      const allServicesBoard = boards.filter((board) => board.id === 1)[0];
      allServicesBoard.items = data.rows;

      const freeServicesBoard = boards.filter((board) => board.id === 2)[0];
      freeServicesBoard.items = services ? services : [];

      setBoards([allServicesBoard, freeServicesBoard]);
    });
  }, []);

  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 2px 3px gray';
    }
  };

  const onDragStartHandler = (board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const onDropHandler = (e, board, item) => {
    e.preventDefault();
    e.target.style.boxShadow = 'none';

    const currIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currIndex, 1);

    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  const onDropCardHandler = (e, board) => {
    board.items.push(currentItem);
    const currIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5 style={{ paddingBottom: '1rem' }}>
          <strong>Добавить услуги</strong>
        </h5>

        {showHandler && (
          <div>
            {/* //TO DO: */}
            <ButtonShadow
              onClick={(e) =>
                showHandler(e, boards.filter((board) => board.id === 2)[0])
              }
            >
              <i className={ICONS.back}></i>
            </ButtonShadow>
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        {boards.map((board) => (
          <Box
            key={board.id}
            title={board.title}
            onDragOver={(e) => onDragOverHandler(e)}
            onDrop={(e) => onDropCardHandler(e, board)}
          >
            {board.items.map((item) => (
              <Element
                draggable={true}
                className="item"
                onDragOver={(e) => onDragOverHandler(e)}
                onDragStart={() => onDragStartHandler(board, item)}
                onDrop={(e) => onDropHandler(e, board)}
                key={item.id}
                name={item.name}
                id={item.id}
                width={'100%'}
                icon={false}
                route={SERVICE_ITEM_ROUTE}
                type={item.type}
              />
            ))}
          </Box>
        ))}
      </div>
    </div>
  );
}

export default ChangeOrganizationServices;
