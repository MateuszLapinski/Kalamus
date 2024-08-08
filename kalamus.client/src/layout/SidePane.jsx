import SideButton from './sidebutton';

export default function SidePane() {
    return (
        <>
            <SideButton imagesrc="/Image/dashboard.png" linkto='/'>
                Summary
            </SideButton>
            <SideButton imagesrc="/Image/calendar.png" linkto='/calendar'>
                Calendar
            </SideButton>
            <SideButton imagesrc="/Image/acquisition.png" linkto='/sale'>
                Sale
            </SideButton >
            <SideButton imagesrc="/Image/users.png" linkto='/clients'>
                Clients
            </SideButton>
            
            <SideButton imagesrc="/Image/messenger.png" linkto='/messenges'>
                Messenges
            </SideButton>
            <SideButton imagesrc="/Image/clipboard.png" linkto='/tasks'>
                Tasks
            </SideButton>
            <SideButton imagesrc="/Image/dashboard.png" linkto='/notes' >
                Notes
            </SideButton>
        </>
    )
}