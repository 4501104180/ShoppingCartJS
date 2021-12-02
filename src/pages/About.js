import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container, Stack, Box, Grid, Breadcrumbs, Typography } from '@mui/material';

import Page from '../components/Page';
import { PATH_PAGE } from '../routes/path';

const TEAM = [
    {
        code: '4501104269',
        name: 'Lê Chính Tuệ',
        image: 'https://uploads.codesandbox.io/uploads/user/027c274a-dbfb-4534-8ace-2fe7ebb1ddf5/r6xN-tue.png'
    },
    {
        code: '4501104101',
        name: 'Nguyễn Trần Hương',
        image: 'https://uploads.codesandbox.io/uploads/user/027c274a-dbfb-4534-8ace-2fe7ebb1ddf5/7f93-huong.png'
    },
    {
        code: '4501104149',
        name: 'Cao Ngọc Kim Ngân',
        image: 'https://uploads.codesandbox.io/uploads/user/027c274a-dbfb-4534-8ace-2fe7ebb1ddf5/QZyg-ngan.png'
    },
    {
        code: '4501104180',
        name: 'Phan Huỳnh Phúc',
        image: 'https://uploads.codesandbox.io/uploads/user/027c274a-dbfb-4534-8ace-2fe7ebb1ddf5/kAht-phuc.png'
    }
];

const About = () => {
    return (
        <Page title='About | CV Shop'>
            <Container className="wide-container">
                <Breadcrumbs separator='›' sx={{ pb: '5px' }}>
                    <Link to={PATH_PAGE.home} style={{ fontSize: '15px' }}>
                        Home
                    </Link>
                    <Typography fontSize='15px' color='text.primary'>
                        About
                    </Typography>
                </Breadcrumbs>
                <Grid container spacing={3}>
                    {TEAM.map(member=>{
                        const { code, name, image } = member;
                        return (
                            <Grid key={code} item xs={12} md={3}>
                                <Stack>
                                    <Contain>
                                        <ContainInner>
                                            <Background />
                                            <Box
                                                component='img'
                                                alt=''
                                                src={image}
                                                sx={{
                                                    pointerEvents: 'none',
                                                    position: 'relative',
                                                    transform: 'translateY(100px) scale(1.15)',
                                                    transformOrigin: '100% bottom',
                                                    transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                                                    left: '22px',
                                                    top: '164px'
                                                }}
                                            />
                                        </ContainInner>
                                    </Contain>
                                    <Box
                                        component='div'
                                        sx={{
                                            backgroundColor: 'error.main',
                                            width: '160px',
                                            height: '2px'
                                        }}
                                    />
                                    <Typography variant='h6'>{name}</Typography>
                                    <Typography variant='subtitle2'>{code}</Typography>
                                </Stack>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Page>
    );
};

const Contain = styled('div')({
    borderRadius: '50%',
    height: '312px',
    transform: 'scale(0.48)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    width: '400px',
    '&:hover': {
        transform: 'scale(0.54)'
    }
});

const ContainInner = styled('div')({
    clipPath: 'path("M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z")',
    position: 'relative',
    transformOrigin: '10%',
    top: '-250px',
    left: '-250px'
});

const Background = styled('div')({
    background: `linear-gradient(
        to bottom,
        hsl(330, 100%, 45.1%) 0%,
        hsl(331, 89.25%, 47.36%) 8.1%,
        hsl(330.53, 79.69%, 48.96%) 15.5%,
        hsl(328.56, 70.89%, 49.96%) 22.5%,
        hsl(324.94, 63.52%, 50.4%) 29%,
        hsl(319.21, 54.99%, 50.3%) 35.3%,
        hsl(310.39, 46.14%, 49.68%) 41.2%,
        hsl(296.53, 39.12%, 49.7%) 47.1%,
        hsl(280.63, 42.91%, 53.43%) 52.9%,
        hsl(265.14, 47.59%, 56.84%) 58.8%,
        hsl(250.13, 52.52%, 59.88%) 64.7%,
        hsl(235.88, 59.2%, 60.91%) 71%,
        hsl(225.81, 68.23%, 57.85%) 77.5%,
        hsl(218.93, 74.97%, 54.21%) 84.5%,
        hsl(213.89, 79.63%, 49.97%) 91.9%,
        hsl(210, 100%, 45.1%) 100%
      )`,
    borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%',
    cursor: 'pointer',
    height: '380px',
    left: '10px',
    pointerEvents: 'none',
    position: 'absolute',
    top: '210px',
    width: '380px'
});

export default About;
