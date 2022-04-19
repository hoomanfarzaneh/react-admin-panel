import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

const Widget = ({type}) => {
  let data;
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  
  switch(type){
    case "user":
      data={
        title: "USERS",
        query: "users",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlined className='icon' style={{
          color:'crimson',
          backgroundColor:"rgba(255,0,0,0.2)"}}/>
      };
      break;
      case "product":
        data={
          title: "PRODUCT",
          query:"products",
          link: "View all orders",
          icon: <ShoppingCartOutlined className='icon' style={{
            color:'goldenrod',
            backgroundColor:"rgba(218,165,32,0.2)"}}/>
        };
        break;
        case "earning":
          data={
            title: "EARNING",
            isMoney: true,
            link: "View net earning",
            icon: <MonetizationOnOutlined className='icon' style={{
              color:'green',
              backgroundColor:"rgba(0,128,0,0.2)"}}/>
          };
          break;
          case "balance":
            data={
              title: "BALANCE",
              isMoney: true,
              link: "See details",
              icon: <AccountBalanceWalletOutlined className='icon' style={{
                color:'purple',
                backgroundColor:"rgba(128,0,128,0.2)"}}/>
            };
            break;
          default:
           break;
        }

useEffect(()=>{
  const fetchData = async () => {
      const today= new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() -1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() -2));
      
      const lastMonthQuery = query(
       collection(db, data.query),
       where("timeStamp", "<=", today),
       where("timeStamp", ">", lastMonth)
       );

       const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
        );

        const lastMonthData = await getDocs(lastMonthQuery);
        const prevMonthData = await getDocs(prevMonthQuery);

        setAmount(lastMonthData.docs.length);
        setDiff(((lastMonthData.docs.length - prevMonthData.docs.length)/prevMonthData.docs.length) * 100)

  }
  fetchData();
},[]);

  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>

        <div className="right">
          <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget