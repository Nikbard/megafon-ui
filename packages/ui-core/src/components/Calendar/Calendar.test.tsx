import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Calendar, { ICalendarProps } from './Calendar';

const props: ICalendarProps = {
    className: 'rootClass',
    startDate: new Date(2020, 1, 7),
    endDate: new Date(2020, 1, 14),
    minBookingDate: new Date(2020, 1, 3),
    maxBookingDate: new Date(2020, 1, 25),
    unavailableDates: [
        new Date(2020, 1, 15),
        new Date(2020, 1, 20),
        new Date(2020, 1, 25),
    ],
    handleChange: jest.fn(),
};

describe('<Calendar />', () => {
    describe('snapshots', () => {
        it('renders with all props', () => {
            const wrapper = shallow(<Calendar {...props} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('handleChange', () => {
        it('calls handleChange on date change', () => {
            const { minBookingDate, maxBookingDate, unavailableDates, ...restProps } = props;
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...restProps} handleChange={handleChange} />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day_first').at(0).simulate('click');
            wrapper.find('.mfui-beta-day_last').at(0).simulate('click');

            expect(handleChange).toBeCalledTimes(2);
        });

        it('calls handleChange only with start date with click after chosen period', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(23).simulate('click');

            expect(handleChange).toBeCalledWith(new Date('2020-02-24T00:00:00.000Z'), null);
        });

        it('calls handleChange only with start date with click on any of chosen dates', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(18).simulate('click');

            expect(handleChange).toBeCalledWith(new Date('2020-02-19T00:00:00.000Z'), null);
        });

        it('shouldnt call handleChange with click on blocked date', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(19).simulate('click');

            expect(handleChange).toHaveBeenCalledTimes(0);
        });

        it('should call handleChange only with start date when period with blocked date chosen', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} />);

            wrapper.find('.mfui-beta-day').at(8).simulate('click');

            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(16).simulate('click');

            expect(handleChange).toHaveBeenCalledWith(new Date('2020-02-17T00:00:00.000Z'), null);
        });

        it('calls handleChange on render only with startDate even if both props given', () => {
            const handleChange = jest.fn();

            mount(<Calendar {...props} handleChange={handleChange} isSingleDate />);

            expect(handleChange).toHaveBeenCalledWith(new Date('2020-02-07T00:00:00.000Z'), null);
        });

        it('should call handleChange with correct arguments in single date mode', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} isSingleDate />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(21).simulate('click');

            expect(handleChange).toHaveBeenCalledWith(new Date('2020-02-22T00:00:00.000Z'), null);
        });

        it('should call handleChange with correct arguments when narroving chosen period', () => {
            const handleChange = jest.fn();

            const wrapper = mount(<Calendar {...props} handleChange={handleChange} />);
            jest.resetAllMocks();

            wrapper.find('.mfui-beta-day').at(8).simulate('click');

            expect(handleChange).toHaveBeenCalledWith(new Date('2020-02-09T00:00:00.000Z'), new Date('2020-02-14T00:00:00.000Z'));

            wrapper.find('.mfui-beta-day').at(12).simulate('click');

            expect(handleChange).toHaveBeenCalledWith(new Date('2020-02-09T00:00:00.000Z'), new Date('2020-02-13T00:00:00.000Z'));
        });
    });
});
