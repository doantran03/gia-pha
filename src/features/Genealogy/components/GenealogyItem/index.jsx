import logo from '@assets/images/GIAPHADAIVIET.png';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import EastIcon from '@mui/icons-material/East';
import EditIcon from '@mui/icons-material/Edit';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function GenealogyItem({ item, onEdit, onDelete }) {
    return (
        <div className='genealogy-item'>
            <div className='genealogy-item__thumb'>
                <img src={logo} alt="thumb" />
            </div>
            <div className='genealogy-item__content'>
                <h3 className='genealogy-item__title'>{item.name}</h3>
                <p className='genealogy-item__members'><GroupsIcon /> Thành viên: 4</p>
                <p className='genealogy-item__generation'><AlignHorizontalLeftIcon /> Thế hệ: 2</p>
                <div className='genealogy-item__cta'>
                    <div className='genealogy-item__links'>
                        <Link to="#"><AccountTreeIcon fontSize="small" />Chỉnh sửa phả đồ</Link>
                        <Link to={`/admin/danh-sach-thanh-vien/${item.id}`}>Danh sách<EastIcon fontSize="small" /></Link>
                    </div>
                    <div className='genealogy-item__btns'>
                        <Button onClick={onEdit} variant="contained" startIcon={<EditIcon />}></Button>
                        <Button onClick={onDelete} variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ ml: 1 }}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenealogyItem;
