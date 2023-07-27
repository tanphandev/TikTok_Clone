import { Box, Container, Typography } from '@mui/material';

import ProfileDetail from '~/components/ProfileDetail';

function Profile() {
    return (
        <Box padding="32px 24px 36px">
            <ProfileDetail />
            <Box>
                <Typography variant="h2">Video</Typography>
            </Box>
        </Box>
    );
}
export default Profile;
