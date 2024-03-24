
import moment from 'moment';


export   function  dataTime() {

    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('DD-MM-YYYY HH:mm');
    // console.log("Formatted Date:", formattedDate  YYYY-MM-DD);

    return  formattedDate   
}


