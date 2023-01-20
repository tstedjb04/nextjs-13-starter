'use client'

import { Button, Form, InputNumber, Select, Slider, Switch } from 'antd'
import styled from 'styled-components'
import tw from 'twin.macro'

const FormItem = Form.Item

export default function AntdPage() {
    return (
        <div>
            <h1 className="text-primary">TEST TITLE</h1>
            <Box />
            <Circle />
            <div>
                <Form
                    layout="horizontal"
                    size={'large'}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <FormItem label="Input Number">
                        <InputNumber
                            min={1}
                            max={10}
                            style={{ width: 100 }}
                            defaultValue={3}
                            name="inputNumber"
                        />
                    </FormItem>

                    <FormItem label="Switch">
                        <Switch defaultChecked />
                    </FormItem>

                    <FormItem label="Slider">
                        <Slider defaultValue={70} />
                    </FormItem>

                    <FormItem label="Select">
                        <Select
                            defaultValue="lucy"
                            style={{ width: 192 }}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'disabled',
                                    disabled: true,
                                    label: 'Disabled',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                            ]}
                        />
                    </FormItem>
                    <FormItem
                        style={{ marginTop: 48 }}
                        wrapperCol={{ offset: 8 }}
                    >
                        <Button type="primary" htmlType="submit">
                            OK
                        </Button>
                        <Button style={{ marginLeft: 8 }}>Cancel</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 16px;
    height: 16px;
`

const Circle = styled.div`
    ${tw`bg-blue-600 w-4 h-4 rounded-full`}
`
