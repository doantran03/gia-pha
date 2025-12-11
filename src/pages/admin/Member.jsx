import { Breadcrumbs, Typography } from '@mui/material';
import MemberTable from '../../features/Member/components/MemberTable';
import { Link, useParams } from 'react-router-dom';
import MemberTree from '../../features/Member/components/MemberTree';

function Member() {
    const { id } = useParams();
    
    return (
        <>
            <div className='app-main__nav'>
                <h2>Danh sách thành viên</h2>

                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                            Core
                        </Link>
                        <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>
            </div>

            <div className='app-main__content'>
                <MemberTable id={id} />
            </div>
        </>
    );
}

export default Member;