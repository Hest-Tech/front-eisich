import {
    returnMessages,
    clearMessages
} from '../../actions/resMessages';

test('Should set up clear messages action object', () => {
    const action = clearMessages();
    
    expect(action).toStrictEqual({
        type: 'CLEAR_MSG'
    });
});