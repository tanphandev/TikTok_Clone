import { Box, ButtonGroup, Grid, Stack, Typography, Button as Button2 } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { ShareIcon, shareIcon } from '~/assets/icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { makeStyles } from '@mui/styles';
import Tippy from '@tippyjs/react';

const useStyles = makeStyles((theme) => ({
    Avatar: {
        borderRadius: '50%',
    },
    messageBtn: {
        width: '164px',
        height: '36px',
        marginRight: '10px',
    },
    followBtn: {
        border: '1px solid rgba(22, 24, 35, .12)',
        color: '#333',
        minWidth: '36px',
        height: '36px',
    },
}));

function ProfileDetail() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Box display="flex">
                        <Box width="116px" height="116px">
                            <img
                                width="100%"
                                height="100%"
                                className={classes.Avatar}
                                alt="avatar"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3c9c0221c02ef491c125e36fddb92325~c5_100x100.jpeg?x-expires=1690527600&x-signature=3LtPSDBPiWz6KDvhSK3yRZ4ad%2Fg%3D"
                            />
                        </Box>
                        <Grid ml="18px">
                            <Typography fontSize="2.8rem" fontWeight="600" lineHeight="38px">
                                relaxcungminh
                            </Typography>
                            <Typography fontSize="1.6rem" mb="12px">
                                Relax cùng tui nha 😊
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Button className={classes.messageBtn} outline>
                                    Message
                                </Button>

                                <Tippy
                                    content={<span style={{ fontSize: '1.6rem', fontWeight: '600' }}>Follower</span>}
                                    placement="bottom"
                                >
                                    <Button2 outline className={classes.followBtn}>
                                        <FontAwesomeIcon fontSize="1.4rem" icon={faUser} />
                                    </Button2>
                                </Tippy>
                            </Box>
                        </Grid>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Typography display="flex" alignItems="center" fontSize="1.6rem">
                            <span style={{ fontSize: '1.8rem', fontWeight: '700', marginRight: '4px' }}>2 </span>
                            Following
                        </Typography>
                        <Typography fontSize="1.6rem">
                            <span style={{ fontSize: '1.8rem', fontWeight: '700', marginRight: '4px' }}>5412 </span>{' '}
                            Follower
                        </Typography>
                        <Typography fontSize="1.6rem">
                            <span style={{ fontSize: '1.8rem', fontWeight: '700', marginRight: '4px' }}>123K </span>{' '}
                            Likes
                        </Typography>
                    </Stack>
                    <Typography fontSize="1.5rem" mt="4px">
                        Vergissmeinnicht
                    </Typography>
                </Box>
                <Box paddingTop="10px">
                    <span style={{ display: 'inline-block', marginRight: '10px' }}>
                        {<ShareIcon width="2.4rem" height="2.4rem" />}
                    </span>
                    <MoreHorizIcon sx={{ fontSize: '24px' }} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default ProfileDetail;
