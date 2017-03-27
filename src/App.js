import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
    {
        "created_at": "2015-11-03T09:45:11.000Z",
        "title": "Indonesia is burning. So why is the world looking away?",
        "url": "http://www.theguardian.com/commentisfree/2015/oct/30/indonesia-fires-disaster-21st-century-world-media",
        "author": "pmcpinto",
        "points": 586,
        "story_text": null,
        "comment_text": null,
        "num_comments": 228,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1446543911,
        "_tags": [
            "story", "author_pmcpinto", "story_10498473"
        ],
        "objectID": "10498473",
        "_highlightResult": {
            "title": {
                "value": "<em>Indonesia</em> is burning. So why is the world looking away?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "url": {
                "value": "http://www.theguardian.com/commentisfree/2015/oct/30/<em>indonesia</em>-fires-disaster-21st-century-world-media",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "author": {
                "value": "pmcpinto",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }, {
        "created_at": "2014-09-03T12:49:32.000Z",
        "title": "Bitcoin Available at 10,000 Indomaret Stores in Indonesia",
        "url": "http://www.coinsetter.com/bitcoin-news/2014/09/03/bitcoin-available-at-10000-indomaret-stores-in-indonesia-1455",
        "author": "sidko",
        "points": 157,
        "story_text": null,
        "comment_text": null,
        "num_comments": 21,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1409748572,
        "_tags": [
            "story", "author_sidko", "story_8262698"
        ],
        "objectID": "8262698",
        "_highlightResult": {
            "title": {
                "value": "Bitcoin Available at 10,000 Indomaret Stores in <em>Indonesia</em>",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "url": {
                "value": "http://www.coinsetter.com/bitcoin-news/2014/09/03/bitcoin-available-at-10000-indomaret-stores-in-<em>indonesia</em>-1455",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "author": {
                "value": "sidko",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }, {
        "created_at": "2015-10-22T16:54:59.000Z",
        "title": "Indonesia's palm oil fires emitted more greenhouse gases in a day than the U.S.",
        "url": "http://qz.com/528160/indonesias-palm-oil-fires-are-emitting-more-greenhouse-gases-every-day-than-the-entire-us/",
        "author": "Thorondor",
        "points": 137,
        "story_text": null,
        "comment_text": null,
        "num_comments": 162,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1445532899,
        "_tags": [
            "story", "author_Thorondor", "story_10433288"
        ],
        "objectID": "10433288",
        "_highlightResult": {
            "title": {
                "value": "<em>Indonesia</em>'s palm oil fires emitted more greenhouse gases in a day than the U.S.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "url": {
                "value": "http://qz.com/528160/<em>indonesia</em>s-palm-oil-fires-are-emitting-more-greenhouse-gases-every-day-than-the-entire-us/",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["indonesia"]
            },
            "author": {
                "value": "Thorondor",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Sugeng rawuh marang React</h2>
                </div>
                <div>

                  <ul>
                    {data.map((item, index) => {
                      console.log('isi item : ',item);
                      return (
                        <li key={index}>{item.title}</li>
                      )
                    })
                  }
                </ul>
                </div>
            </div>
        );
    }
}

export default App;
