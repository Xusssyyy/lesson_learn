import { useState, useEffect } from 'react'
import WeUI from 'react-weui'
import PropTypes from 'prop-types';
const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxDescription,
    MediaBoxTitle,
    Button,
    ButtonArea,
    Dialog
} = WeUI



const Address = ({address}) => {
    const [showDialog, setShowDialog] = useState(false)
    const delAddress = () => {
        setShowDialog(true)
    }
    return (
        <Page>
            <Panel>
                <PanelHeader>地址</PanelHeader>
                <PanelBody>
                    {address.map(item => <MediaBox key={item.id} type="text">
                        <MediaBoxDescription>
                            {item.address}
                        </MediaBoxDescription>
                        <MediaBoxTitle>{item.name}</MediaBoxTitle>
                    </MediaBox>)}
                </PanelBody>
            </Panel>
            <ButtonArea>
                <Button>新增地址</Button>
            </ButtonArea>
            <ButtonArea>
                <Button type='warn' onClick={delAddress}>删除地址</Button>
            </ButtonArea>
            <Dialog show={showDialog} type="ios" title="确定删除地址吗？"/>
        </Page>
    )
}

Address.propTypes = {
    address:PropTypes.array.isRequired
}
export default Address