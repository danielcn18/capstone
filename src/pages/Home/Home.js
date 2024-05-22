import Footer from '../../components/Footer/Footer';
import RightColumn from './components/RightColumn/RightColumn';
import LeftColumn from '../../components/LeftColumn/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn/MiddleColumn';

export default function Home() {

    return (
        <>
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
            <Footer />
        </>
    );
}