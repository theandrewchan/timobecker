import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Logo from 'components/logo/logo'
import POINTS from 'components/logo/points'

import 'style/main.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },

    reset: function() {
        this.refs.logo.reset()
    },

    render () {
        return (
            <DocumentTitle title={config.siteTitle}>
                <div className="intro">
                    <Logo className="tb_logo"
                            points={POINTS}
                            size={400}
                            margin={20}
                            showLabels={false}
                            mode="connect"
                            ref="logo"
                            canvasResize={true} />
                    <button onClick={this.reset}
                            className="intro-reset">
                        neu <span className="english">new</span>
                    </button>

                </div>
            </DocumentTitle>
        )
    }
})