import React from 'react'
import WeUI, { TabBar, TabBody } from "react-weui"
import { useNavigate } from 'react-router-dom'
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'

const{
    Tab,
    TabBarItem,
    TabBarIcon,
    TabBody,
    Cells,
    Cell,
    CellsTitle,
    CellBody,
    CellFooter,
    CellHeader,
    Badge
}=WeUI

const User = () => {
    const navigate = useNavigate()
    const gotoPage = (page) => {
        navigate(page)
    }
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{marginTop:0}}>
                        <Cell onClick={gotoPage.bind(null,'/login')}>
                            <CellHeader style={{position:'relative',
                            marginRight:'10px'}}>
                                <img src="{IconUser}" 
                                    style={{width:'50px',display:block}} />
                            </CellHeader>
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
            <TabBar>
                <TabBarItem 
                active={false} 
                icon={<img src={IconHome}/>}
                label="书单"
                onClick={gotoPage.bind(null,'/')}
                />
            </TabBar>
        </Tab>
    )
}
export default User