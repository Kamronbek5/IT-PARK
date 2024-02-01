import Tableleft from './components/tableleft';
import Tableright from './components/tableright';
import { useEffect, useState } from "react";
import { Spin } from "antd";

const TablePage = () => {
  const [loading , setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },2000)
  },[])
  return (
      <div>
          {loading ? (
              <div className='Loading'>
                  <Spin tip='Loading' size='large'>
                      <div className='content' />
                  </Spin>
              </div>
          ) : (
              <div className='table resp__contain'>
                  <Tableleft />
                  <Tableright />
              </div>
          )}
      </div>
  );
}

export default TablePage;
