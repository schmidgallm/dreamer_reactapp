import {
    ADD_STORY,
    GET_STORIES,
    GET_STORY,
    STORY_ERROR,
    UPDATE_LIKES_STORY,
    UPDATE_ONE_LIKES_STORY,
    ADD_COMMENT_STORY,
    REMOVE_COMMENT_STORY,
    DELETE_STORY,
} from '../actions/types';

// init initial state
const initialState = {
    stories: [],
    story: {},
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_STORIES:
            return {
                ...state,
                stories: payload,
                loading: false,
            };
        case GET_STORY:
            return {
                ...state,
                story: payload,
                loading: false,
            };
        case ADD_STORY:
            return {
                ...state,
                stories: [...state.stories, payload],
                loading: false,
            };
        case DELETE_STORY: {
            return {
                ...state,
                stories: state.stories.filter(story => story._id !== payload),
                loading: false,
            };
        }
        case STORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case UPDATE_LIKES_STORY:
            return {
                ...state,
                stories: state.stories.map(story =>
                    story._id === payload.id
                        ? { ...story, likes: payload.likes }
                        : story
                ),
                loading: false,
            };
        case UPDATE_ONE_LIKES_STORY:
            return {
                ...state,
                story: { ...state.story, likes: payload.likes },
                loading: false,
            };
        case ADD_COMMENT_STORY:
            return {
                ...state,
                story: { ...state.story, comments: payload },
                loading: false,
            };
        case REMOVE_COMMENT_STORY:
            return {
                ...state,
                story: {
                    ...state.story,
                    comments: payload,
                },
                loading: false,
            };
        default:
            return state;
    }
}
