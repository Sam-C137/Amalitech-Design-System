import { newSpecPage } from '@stencil/core/testing';
import { AmalitechTimePicker } from '../amalitech-time-picker';

describe('amalitech-time-picker', () => {
  it('renders with defaults', async () => {
    const page = await newSpecPage({
      components: [AmalitechTimePicker],
      html: `<amalitech-time-picker></amalitech-time-picker>`,
    });
    expect(page.root).toEqualHtml(`
        <amalitech-time-picker class="size-medium" tabindex="0" role="spinbutton" aria-label="Pick a Time" aria-haspopup="dialog" aria-owns="time-picker" aria-valuenow="0000" aria-valuetext="00:00 " aria-valuemin="0000" aria-valuemax="2359" aria-required="false">
            <mock:shadow-root>
                <div class="size-medium span" aria-controls="time-picker" aria-expanded="false">
                    <div>
                    <p>Pick a Time</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="#8f95b2" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"></path></svg>
                    </div>
                </div>
                <main role='dialog'>
                    <section>
                        <summary>
                            <div>
                                <button type="button" class="hour active" tabindex="-1">00</button>
                                <button type="button" class="hour" tabindex="-1">01</button>
                                <button type="button" class="hour" tabindex="-1">02</button>
                                <button type="button" class="hour" tabindex="-1">03</button>
                                <button type="button" class="hour" tabindex="-1">04</button>
                                <button type="button" class="hour" tabindex="-1">05</button>
                                <button type="button" class="hour" tabindex="-1">06</button>
                                <button type="button" class="hour" tabindex="-1">07</button>
                                <button type="button" class="hour" tabindex="-1">08</button>
                                <button type="button" class="hour" tabindex="-1">09</button>
                                <button type="button" class="hour" tabindex="-1">10</button>
                                <button type="button" class="hour" tabindex="-1">11</button>
                                <button type="button" class="hour" tabindex="-1">12</button>
                                <button type="button" class="hour" tabindex="-1">13</button>
                                <button type="button" class="hour" tabindex="-1">14</button>
                                <button type="button" class="hour" tabindex="-1">15</button>
                                <button type="button" class="hour" tabindex="-1">16</button>
                                <button type="button" class="hour" tabindex="-1">17</button>
                                <button type="button" class="hour" tabindex="-1">18</button>
                                <button type="button" class="hour" tabindex="-1">19</button>
                                <button type="button" class="hour" tabindex="-1">20</button>
                                <button type="button" class="hour" tabindex="-1">21</button>
                                <button type="button" class="hour" tabindex="-1">22</button>
                                <button type="button" class="hour" tabindex="-1">23</button>
                            </div>
                        </summary>
                        <summary>
                            <div>
                                <button type="button" class="minute active" tabindex="-1">00</button>
                                <button type="button" class="minute" tabindex="-1">01</button>
                                <button type="button" class="minute" tabindex="-1">02</button>
                                <button type="button" class="minute" tabindex="-1">03</button>
                                <button type="button" class="minute" tabindex="-1">04</button>
                                <button type="button" class="minute" tabindex="-1">05</button>
                                <button type="button" class="minute" tabindex="-1">06</button>
                                <button type="button" class="minute" tabindex="-1">07</button>
                                <button type="button" class="minute" tabindex="-1">08</button>
                                <button type="button" class="minute" tabindex="-1">09</button>
                                <button type="button" class="minute" tabindex="-1">10</button>
                                <button type="button" class="minute" tabindex="-1">11</button>
                                <button type="button" class="minute" tabindex="-1">12</button>
                                <button type="button" class="minute" tabindex="-1">13</button>
                                <button type="button" class="minute" tabindex="-1">14</button>
                                <button type="button" class="minute" tabindex="-1">15</button>
                                <button type="button" class="minute" tabindex="-1">16</button>
                                <button type="button" class="minute" tabindex="-1">17</button>
                                <button type="button" class="minute" tabindex="-1">18</button>
                                <button type="button" class="minute" tabindex="-1">19</button>
                                <button type="button" class="minute" tabindex="-1">20</button>
                                <button type="button" class="minute" tabindex="-1">21</button>
                                <button type="button" class="minute" tabindex="-1">22</button>
                                <button type="button" class="minute" tabindex="-1">23</button>
                                <button type="button" class="minute" tabindex="-1">24</button>
                                <button type="button" class="minute" tabindex="-1">25</button>
                                <button type="button" class="minute" tabindex="-1">26</button>
                                <button type="button" class="minute" tabindex="-1">27</button>
                                <button type="button" class="minute" tabindex="-1">28</button>
                                <button type="button" class="minute" tabindex="-1">29</button>
                                <button type="button" class="minute" tabindex="-1">30</button>
                                <button type="button" class="minute" tabindex="-1">31</button>
                                <button type="button" class="minute" tabindex="-1">32</button>
                                <button type="button" class="minute" tabindex="-1">33</button>
                                <button type="button" class="minute" tabindex="-1">34</button>
                                <button type="button" class="minute" tabindex="-1">35</button>
                                <button type="button" class="minute" tabindex="-1">36</button>
                                <button type="button" class="minute" tabindex="-1">37</button>
                                <button type="button" class="minute" tabindex="-1">38</button>
                                <button type="button" class="minute" tabindex="-1">39</button>
                                <button type="button" class="minute" tabindex="-1">40</button>
                                <button type="button" class="minute" tabindex="-1">41</button>
                                <button type="button" class="minute" tabindex="-1">42</button>
                                <button type="button" class="minute" tabindex="-1">43</button>
                                <button type="button" class="minute" tabindex="-1">44</button>
                                <button type="button" class="minute" tabindex="-1">45</button>
                                <button type="button" class="minute" tabindex="-1">46</button>
                                <button type="button" class="minute" tabindex="-1">47</button>
                                <button type="button" class="minute" tabindex="-1">48</button>
                                <button type="button" class="minute" tabindex="-1">49</button>
                                <button type="button" class="minute" tabindex="-1">50</button>
                                <button type="button" class="minute" tabindex="-1">51</button>
                                <button type="button" class="minute" tabindex="-1">52</button>
                                <button type="button" class="minute" tabindex="-1">53</button>
                                <button type="button" class="minute" tabindex="-1">54</button>
                                <button type="button" class="minute" tabindex="-1">55</button>
                                <button type="button" class="minute" tabindex="-1">56</button>
                                <button type="button" class="minute" tabindex="-1">57</button>
                                <button type="button" class="minute" tabindex="-1">58</button>
                                <button type="button" class="minute" tabindex="-1">59</button>
                            </div>
                        </summary>
                    </section>
                    <footer class="size-medium">
                        <button tabindex="-1" type="button">Now</button>
                        <button tabindex="-1" type="button">OK</button>
                    </footer>
                </main>
            </mock:shadow-root>
        </amalitech-time-picker>
        `);
  });
});
