import React from 'react';
import ItemList from './itemList';
import {mount} from 'enzyme';
import GotService from '../../services/gotService';

describe('Testing <ItemList/>', () => {
    const service = new GotService();
    const list = mount(<ItemList
                            getData={service.getAllHouses}
                            renderItem={({name}) => name}/>);
    it('Click on item list must rerender all llist in 1 instance', () => {
        list.setState({itemList: [{name: 'wqw', id: 1}, {name: 'wqw', id: 2}]});
        list.find('.list-group-item:first-child').simulate('click');
        expect(list.find('ul')).toHaveLength(1);
    });
});