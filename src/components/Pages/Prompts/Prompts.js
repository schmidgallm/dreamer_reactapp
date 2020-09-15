import React from 'react'

const Prompts = (props) => {
    console.log(props.match.url + '/test')
    return (
        <div className="prompt-wrapper">
            <div className="prompt-wrapper-header container-fluid">
                <h1>Writing Prompts</h1>
                <p>
                    Wheter your story has yet to begin or you're already
                    suffering from witer's block, writing prompts will jump
                    start your brain better than a cup of coffee! Stay for the
                    endless possibilites you and others can imagine with just a
                    little headstart!
                </p>
            </div>
            <div className="prompt-wrapper-body container">
                <div className="prompt card">
                    <div className="prompt-header card-header">
                        <span>Rockey Meyers | 8-9-20</span>

                        <span>
                            {' '}
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                    </div>
                    <div className="prompt-body card-body">
                        <h5>
                            Prompt Title |{' '}
                            <span className="text-muted">Science Fiction</span>
                        </h5>
                        <p className="prompt-content">
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                    </div>
                    <div className="prompt-footer card-footer">
                        <div>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                <span className="mx-2">50K</span>
                                <i className="fa fa-thumbs-down"></i>
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fa fa-comment"></i> 659
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prompts

/*
<div className="prompt-container container">
                <div className="prompt">
                    <div className="prompt-header">
                        <span>Rockey Meyers | 8-9-20</span>

                        <span>
                            {' '}
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                    </div>
                    <div className="prompt-body">
                        <h5>
                            Prompt Title |{' '}
                            <span className="text-muted">Science Fiction</span>
                        </h5>
                        <p className="prompt-content">
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                    </div>
                    <div className="prompt-footer">
                        <div>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                <span className="mx-2">50K</span>
                                <i className="fa fa-thumbs-down"></i>
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fa fa-comment"></i> 659
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
*/

/*
Wheter your story has yet to begin or you're already
                    suffering from witer's block, writing prompts will jump
                    start your brain better than a cup of coffee! Stay for the
                    endless possibilites you and others can imagine with just a
                    little headstart!
*/
