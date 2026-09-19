/* v3 content layer: preserves data.js and its live, read-only bookshelf. */
(() => {
  const data = window.RESUME;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = (value) => { try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? escape(url.href) : ''; } catch { return ''; } };
  $('#year').textContent = new Date().getFullYear();
  $('#about-description').textContent = data.aboutPersonal.body.replace("Hey! I'm Net 👋 — a backend engineer based in Bangkok with 5+ years building microservices in Java and Kotlin. ", "I'm a backend engineer based in Bangkok, with 5+ years building microservices in Java and Kotlin. ");
  $('#skills').innerHTML = data.skills.flatMap(group => group.items.map(item => `<span class="skill">${escape(item.name)}${group.learning ? ' ↗' : ''}</span>`)).join('');
  $('#career-content').innerHTML = data.experience.map(job => `<article class="career-item"><h3>${escape(job.co)}</h3><p>${escape(job.role)} · ${escape(job.date)}</p><ul>${job.bullets.map(b => `<li>${escape(b)}</li>`).join('')}</ul></article>`).join('') + data.education.map(e => `<article class="career-item"><h3>${escape(e.school)}</h3><p>${escape(e.degree)} · ${escape(e.date)}</p></article>`).join('');
  $('#race-records').innerHTML = data.runs.map(run => `<a class="race-record" href="${safeURL(run.eslip)}" target="_blank" rel="noopener noreferrer"><span><strong>${escape(run.distance)}</strong><small>${escape(run.event)}<br>${escape(run.date)} · View race record</small><b>↗</b></span></a>`).join('');
  $('#tcg-grid').innerHTML = data.tcg.map(card => `<${card.href ? 'a' : 'article'} class="tcg-item" ${card.href ? `href="${safeURL(card.href)}" target="_blank" rel="noopener noreferrer"` : ''}><img src="${safeURL(card.icon)}" alt="" loading="lazy"><h3>${escape(card.name)}</h3><small>${card.soon ? 'MORE FROM THIS WORLD SOON' : 'EXPLORE MY PROFILE ↗'}</small></${card.href ? 'a' : 'article'}>`).join('');
  $('#social-links').innerHTML = ['linkedin','github','facebook','instagram','youtube','spotify'].map(key => `<a href="${safeURL(data.contact[key])}" target="_blank" rel="noopener noreferrer">${{linkedin:'LinkedIn',github:'GitHub',youtube:'YouTube'}[key] || key[0].toUpperCase()+key.slice(1)} ↗</a>`).join('');
  $('#email-link').href = `mailto:${data.contact.email}`;
  let selectedYear = 'All', visibleCount = 5;
  function renderBooks() {
    const categories = data.books.categories;
    const all = categories.flatMap(c => c.books.map(b => ({...b, year:c.name})));
    if (selectedYear !== 'All' && !categories.some(c => c.name === selectedYear)) selectedYear = 'All';
    const books = all.filter(b => selectedYear === 'All' || b.year === selectedYear);
    $('#book-count').textContent = all.length; $('#orbit-books').textContent = all.length;
    $('#shelf-total').textContent = `${all.length} WORLDS EXPLORED`;
    $('#year-filters').innerHTML = ['All', ...categories.map(c => c.name)].map(year => `<button type="button" aria-pressed="${year === selectedYear}" data-year="${escape(year)}">${escape(year)}</button>`).join('');
    $('#shelf-status').textContent = `${Math.min(books.length,visibleCount)} OF ${books.length} BOOKS`;
    $('#book-grid').innerHTML = books.length ? books.slice(0,visibleCount).map(book => `<article class="book-item"><div class="book-cover"><span class="book-fallback" ${book.cover ? 'hidden' : ''}>${escape(book.title)}</span>${book.cover ? `<img src="${safeURL(book.cover)}" alt="${escape(book.title)} cover" loading="lazy" referrerpolicy="no-referrer">` : ''}</div><h3>${escape(book.title)}</h3><p>${escape(book.author)}</p>${book.dateEnd ? `<div class="book-date">FINISHED / ${escape(book.dateEnd)}</div>` : ''}</article>`).join('') : '<p>No finished books yet. The next adventure is waiting.</p>';
    $('#book-grid').querySelectorAll('img').forEach(img => { const fallback = () => { img.hidden = true; img.previousElementSibling.hidden = false; }; img.addEventListener('error', fallback, { once:true }); if (img.complete && !img.naturalWidth) fallback(); });
    $('#more-books').hidden = books.length <= visibleCount;
  }
  $('#year-filters').addEventListener('click', e => { const button = e.target.closest('[data-year]'); if (!button) return; selectedYear = button.dataset.year; visibleCount = 5; renderBooks(); [...$('#year-filters').children].find(b => b.dataset.year === selectedYear)?.focus({ preventScroll:true }); });
  $('#more-books').addEventListener('click', () => { visibleCount += 10; renderBooks(); if ($('#more-books').hidden) $('#year-filters button[aria-pressed=true]').focus({preventScroll:true}); });
  window.addEventListener('shelf:updated', renderBooks); renderBooks();
  const menu = $('.menu-toggle');
  const closeMenu = () => { menu.setAttribute('aria-expanded','false'); $('#navigation').classList.remove('open'); };
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); $('#navigation').classList.toggle('open', open); });
  $('#navigation').addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  window.addEventListener('resize', () => { if (innerWidth > 760) closeMenu(); });
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)'); let paused = motionQuery.matches;
  function setMotion() { document.documentElement.classList.toggle('motion-paused', paused); $('#motion-toggle').setAttribute('aria-pressed',String(paused)); $('#motion-toggle').textContent = paused ? '▷ Resume motion' : 'Ⅱ Pause motion'; window.dispatchEvent(new CustomEvent('orbit:motion', {detail:{paused}})); }
  $('#motion-toggle').addEventListener('click', () => { paused = !paused; setMotion(); });
  motionQuery.addEventListener('change', e => { paused = e.matches; setMotion(); }); setMotion();
})();
