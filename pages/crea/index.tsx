'use client';
import type { NextPage } from 'next';
import { Navbar } from '../../components/Navbar';
import { Title } from '../../components/Title';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';

const Home: NextPage = () => {
    return (
        <div >
            <Navbar />
            <Title title='La tua raccolta' />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;
