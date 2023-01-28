import Header from '~/components/Layout/components/Header';
function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}
export default OnlyHeader;
