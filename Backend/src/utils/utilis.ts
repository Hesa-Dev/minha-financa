
import moment from 'moment';


export   function  dataTime() {

    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('DD-MM-YYYY HH:mm');

    return  formattedDate   
}


