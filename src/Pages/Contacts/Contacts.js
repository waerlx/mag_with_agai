import { Typography } from 'antd';
import './Contacts.css';
function Contacts() {
    return (
        <>
            <div className="contacts">

                <h2 className='contact_tit'>Contacts</h2>
                <h3 className='contact_tit'><b>Служба поддержки читателей</b></h3>
                <Typography className='contact_txt'>Если у вас возникли проблемы при использовании ЛитРес, воспользуйтесь нашей базой знаний  или свяжитесь со службой поддержки:</Typography>
            </div>
        </>
    );
}
export default Contacts;